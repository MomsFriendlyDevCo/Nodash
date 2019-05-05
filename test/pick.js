var _ = require('..');
var expect = require('chai').expect;

describe('_.pick', ()=> {

	it('should pick keys from an object', ()=> {
		var input = {foo: 1, bar: 2, baz: 3};
		expect(_.pick(input, 'bar')).to.deep.equal({bar: 2});
		expect(_.pick(input, ['foo', 'baz'])).to.deep.equal({foo: 1, baz: 3});
		expect(_.pick(input, new Set(['foo', 'bar']))).to.deep.equal({foo: 1, bar: 2});
		expect(_.pick(input, 'quz')).to.deep.equal({});
	});

});
