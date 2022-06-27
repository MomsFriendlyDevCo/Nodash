var _ = require('..');
var expect = require('chai').expect;

describe('_.pipe', ()=> {

	let inc = v => v + 1;
	let add = (v, no) => v + no;

	it('should correctly pipe unary functions', ()=> {
		expect(_.pipe(1, inc)).to.equal(2);
		expect(_.pipe(1, inc, inc)).to.equal(3);
		expect(_.pipe(1, v => v + 1, inc)).to.equal(3);
	});

	it('should correctly handle hack style syntax', ()=> {
		expect(_.pipe(1, [add, '%', 1])).to.equal(2);
		expect(_.pipe(1, inc, [add, 1, '%'])).to.equal(3);
		expect(_.pipe(1, [add, 2, 2])).to.equal(4);
	});

});
