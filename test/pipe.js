import _ from '#nodash';
import {expect} from 'chai';

describe('_.function.pipe', ()=> {

	let inc = v => v + 1;
	let add = (v, no) => v + no;

	it('should correctly pipe unary functions', ()=> {
		expect(_.function.pipe(1, inc)).to.equal(2);
		expect(_.function.pipe(1, inc, inc)).to.equal(3);
		expect(_.function.pipe(1, v => v + 1, inc)).to.equal(3);
	});

	it('should correctly handle hack style syntax', ()=> {
		expect(_.function.pipe(1, [add, '%', 1])).to.equal(2);
		expect(_.function.pipe(1, inc, [add, 1, '%'])).to.equal(3);
		expect(_.function.pipe(1, [add, 2, 2])).to.equal(4);
	});

});
