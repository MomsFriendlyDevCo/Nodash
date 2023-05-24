import _ from '#nodash';
import {expect} from 'chai';

describe('_.function.throttle', ()=> {

	it('should throttle function calls (once)', done => {
		let called = 0;
		let func = _.function.throttle(()=> called++, 1000);

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
		let called = 0;
		let func = _.function.throttle(()=> called++, 100);

		func();
		setTimeout(func, 200);
		setTimeout(func, 400);

		setTimeout(()=> {
			expect(called).to.equal(3);
			done();
		}, 600);
	});

});
