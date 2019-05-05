/**
* Resolve promises in series
* This works the same as Promise.all() but resolves its payload, one at a time until all promises are resolved
* NOTE: Because of the immediately-executing 'feature' of Promises it is recommended that the input array provide
*       an array of functions which return Promises rather than promises directly - i.e. return promise factories
*
* @example Evaluate a series of promises with a delay, one at a time, in order (note that the map returns a promise factory, otherwise the promise would execute immediately)
* Promise.allSeries(
*   [500, 400, 300, 200, 100, 0, 100, 200, 300, 400, 500].map((delay, index) => ()=> new Promise(resolve => {
*     setTimeout(()=> { console.log('EVAL', index, delay); resolve(); }, delay);
*   }))
* )
* @url https://github.com/MomsFriendlyDevCo/Nodash
*/
module.exports = promises =>
	promises.reduce((chain, promise) =>
		chain.then(()=>
			Promise.resolve(
				typeof promise == 'function' ? promise() : promise
			)
		)
		, Promise.resolve()
	);