var _ = require('..');
var expect = require('chai').expect;

describe('_.throttle', ()=> {

	it('should throttle function calls (once)', done => {
		var called = 0;
		var func = _.throttle(()=> called++, 1000);

		func();
		func();
		setTimeout(func, 100);
		setTimeout(func, 200);
		setTimeout(func, 300);

		setTimeout(()=> {
			expect(called).to.equal(1);
			done();
		}, 1500);
	});

	it('should throttle function calls (mutliple tries)', done => {
		var called = 0;
		var func = _.throttle(()=> called++, 100);

		func();
		setTimeout(func, 200);
		setTimeout(func, 400);

		setTimeout(()=> {
			expect(called).to.equal(3);
			done();
		}, 600);
	});

});
