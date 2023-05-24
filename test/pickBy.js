import _ from '#nodash';
import {expect} from 'chai';

describe('_.pickBy', ()=> {

	it('should pick keys from an object by picker function', ()=> {
		let input = {foo: 1, bar: 2, baz: 3, _quz: 4};
		expect(_.pickBy(input, (v, k) => k == 'bar')).to.deep.equal({bar: 2});
		expect(_.pickBy(input, (v, k) => !k.startsWith('_'))).to.deep.equal({foo: 1, bar: 2, baz: 3,});
		expect(_.pickBy(input, ()=> false)).to.deep.equal({});
	});

});
