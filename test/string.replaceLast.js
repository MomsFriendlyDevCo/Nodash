var _ = require('..');
var expect = require('chai').expect;

describe('_.replaceLast', ()=> {

	it('should replace only the last occurance of a string', ()=> {
		expect(_.string.replaceLast('foo ba ba', 'ba', 'BA')).to.equal('foo ba BA');
		expect(_.string.replaceLast('foo bar baz', 'baz', 'BAZ')).to.equal('foo bar BAZ');
		expect(_.string.replaceLast('foo bar baz', 'foo', 'FO')).to.equal('FO bar baz');
		expect(_.string.replaceLast('foo foo foo', 'foo', 'FOO')).to.equal('foo foo FOO');
		expect(_.string.replaceLast('foo foo foo', 'quz', 'FOO')).to.equal('foo foo foo');
	});

});
