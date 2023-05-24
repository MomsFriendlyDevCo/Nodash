import _ from '#nodash';
import {expect} from 'chai';

describe('_.camelCase', ()=> {

	it('should translate various terms to camelcase', ()=> {
		expect(_.camelCase('hello world')).to.equal('helloWorld');
		expect(_.camelCase('hello-world')).to.equal('helloWorld');
		expect(_.camelCase('Hello World')).to.equal('helloWorld');
	});

});
