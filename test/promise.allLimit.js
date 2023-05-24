import _ from '#nodash';
import {expect} from 'chai';
import mlog from 'mocha-logger';

describe('_.promise.allLimit', ()=> {

	it('should run promises in series', function() {
		this.timeout(10 * 1000);

		let delays = [500, 400, 300, 200, 100, 0, 100, 200, 300, 400, 500];
		let output = [];

		return _.promise.allLimit(
			1,
			delays.map(delay => ()=> new Promise(resolve => {
				setTimeout(()=> {
					output.push(delay);
					resolve();
				}, delay);
			}))
		).then(()=> {
			expect(output).to.deep.equal(delays);
		})
	});

	it('should never have more than 2 promises run at once', function() {
		this.timeout(10 * 1000);

		let delays = [500, 400, 300, 200, 100, 0, 100, 200, 300, 400, 500];
		let running = 0;

		return _.promise.allLimit(
			2,
			delays.map(delay => ()=> new Promise((resolve, reject) => {
				mlog.log('Running delay', delay);
				running++;
				if (running > 2) reject(`Promises running at once: ${running}`);
				setTimeout(()=> {
					running--;
					resolve(delay);
				}, delay);
			}))
		).then(output => {
			expect(output).to.deep.equal(delays);
		})
	});

});
