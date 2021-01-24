var _ = require('..');
var expect = require('chai').expect;
var promiseAllSeries = require('../promise.allSeries');

describe('_.promise.allSeries', ()=> {

	it('should run promises in series', function() {
		this.timeout(10 * 1000);

		var delays = [500, 400, 300, 200, 100, 0, 100, 200, 300, 400, 500];
		var output = [];

		return _.promise.allSeries(
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

	it('should fail correctly',  function() {
		var ran = [];

		return _.promise.allSeries(
			[1, 2, false, 3, 4].map(val => ()=> new Promise((resolve, reject) => {
				if (val === false) {
					reject(val);
				} else {
					ran.push(val);
					resolve(val);
				}
			}))
		)
			.then(()=> expect.fail)
			.catch(e => {
				expect(e).to.deep.equal(false);
				expect(ran).to.deep.equal([1, 2]);
			})
	});

});
