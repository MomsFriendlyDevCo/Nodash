var _ = require('..');
var expect = require('chai').expect;
var mlog = require('mocha-logger');
var promiseAllSeries = require('../promise.allSeries');

describe('_.promise.allObject', ()=> {

	it('should result an object of promises', ()=>
		_.promise.allObject({
			one: new Promise(resolve => resolve(1)),
			two: new Promise(resolve => setTimeout(()=> resolve(2), 300)),
			three: 3,
			four: new Promise(resolve => setTimeout(()=> resolve(4), 100)),
		}).then(result => {
			expect(result).to.deep.equal({
				one: 1,
				two: 2,
				three: 3,
				four: 4,
			});
		})
	);

});
