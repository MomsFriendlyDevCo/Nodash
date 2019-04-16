var expect = require('chai').expect;
var promiseAllSeries = require('../promise.allSeries');

describe('promise.allSeries', ()=> {

	it('should run promises in series', function() {
		this.timeout(10 * 1000);

		var delays = [500, 400, 300, 200, 100, 0, 100, 200, 300, 400, 500];
		var output = [];

		return promiseAllSeries(
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

});
