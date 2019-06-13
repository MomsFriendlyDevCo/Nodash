var _ = require('..');
var expect = require('chai').expect;
var mlog = require('mocha-logger');
var promiseAllSeries = require('../promise.allSeries');

describe('_.promise.allLimit', ()=> {

	it('should run promises in series', function() {
		this.timeout(10 * 1000);

		var delays = [500, 400, 300, 200, 100, 0, 100, 200, 300, 400, 500];
		var output = [];

		return _.promise.allLimit(
			1,
			delays.map((delay, index) => ()=> new Promise(resolve => {
				setTimeout(()=> {
					output.push(delay);
					resolve();
				}, delay);
			}))
		).then(()=> {
			expect(output).to.deep.equal(delays);
		})
	});

	it.only('should never have more than 2 promises run at once', function() {
		this.timeout(10 * 1000);

		var delays = [500, 400, 300, 200, 100, 0, 100, 200, 300, 400, 500];
		var running = 0;

		return _.promise.allLimit(
			2,
			delays.map((delay, index) => ()=> new Promise((resolve, reject) => {
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
