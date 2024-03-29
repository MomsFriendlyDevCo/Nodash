import _ from '#nodash';
import {expect} from 'chai';

describe('_.mapValues', ()=> {

	it('should correctly map values from an object', ()=> {
		let fruits = {
			apple: {name: 'apple2', number: 5},
			orange: {name: 'orange2', number: 10},
		};
		expect(_.mapValues(fruits, (f, i) => {
			expect(f).to.be.an('object');
			expect(i).to.be.a('string');
			return f.number;
		})).to.deep.equal({
			apple: 5,
			orange: 10,
		});
	});

});
