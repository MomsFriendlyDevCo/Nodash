var _ = require('..');
var expect = require('chai').expect;
var mlog = require('mocha-logger');
var promiseAllSeries = require('../promise.allSeries');

describe('_.promise.allObject', ()=> {

	it('should result an object of promises', ()=>
		_.promise.allObject({
			one: new Promise(resolve => resolve(1)),
			two: new Promise(resolve => resolve(2)),
			three: new Promise(resolve => resolve(3)),
		}).then(result => {
			expect(result).to.deep.equal({
				one: 1,
				two: 2,
				three: 3,
			});
		})
	);

});
