var _ = require('..');
var expect = require('chai').expect;

describe('_.omit', ()=> {

	it('should omit keys from an object', ()=> {
		var input = {foo: 1, bar: 2, baz: 3};
		expect(_.omit(input, 'bar')).to.deep.equal({foo: 1, baz: 3});
		expect(_.omit(input, ['baz'])).to.deep.equal({foo: 1, bar: 2});
		expect(_.omit(input, new Set(['foo']))).to.deep.equal({bar: 2, baz: 3});
		expect(_.omit(input, 'quz')).to.deep.equal({foo: 1, bar: 2, baz: 3});
	});

});
