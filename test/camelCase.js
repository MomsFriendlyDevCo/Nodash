var _ = require('..');
var expect = require('chai').expect;

describe('_.camelCase', ()=> {

	it('should translate various terms to camelcase', ()=> {
		expect(_.camelCase('hello world')).to.equal('helloWorld');
		expect(_.camelCase('hello-world')).to.equal('helloWorld');
		expect(_.camelCase('Hello World')).to.equal('helloWorld');
	});

});
