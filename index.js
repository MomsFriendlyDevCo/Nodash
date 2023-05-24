/**
* Export the main objet as a lookup
* I've no idea why you would want this instead of Lodash, this is only really so that you can easily export the main object to the testkits
*/
import camelCase from '#lib/camelCase';
import castArray from '#lib/castArray';
import flatten from '#lib/flatten';
import functionPipe from '#lib/function.pipe';
import functionThrottle from '#lib/function.throttle';
import get from '#lib/get';
import mapValues from '#lib/mapValues';
import omit from '#lib/omit';
import pick from '#lib/pick';
import pickBy from '#lib/pickBy';
import promiseAllLimit from '#lib/promise.allLimit';
import promiseAllObject from '#lib/promise.allObject';
import promiseAllSeries from '#lib/promise.allSeries';
import promiseTimeout from '#lib/promise.timeout';
import regexpEscape from '#lib/regexp.escape';
import set from '#lib/set';
import stringCamelCase from '#lib/string.camelCase';
import stringReplaceLast from '#lib/string.replaceLast';
import stringStartCase from '#lib/string.startCase';

export default {
	camelCase,
	castArray,
	flatten,
	function: {
		pipe: functionPipe,
		throttle: functionThrottle,
	},
	get,
	mapValues,
	omit,
	pick, pickBy,
	promise: {
		allLimit: promiseAllLimit,
		allObject: promiseAllObject,
		allSeries: promiseAllSeries,
		timeout: promiseTimeout,
	},
	regexp: {
		escape: regexpEscape,
	},
	set,
	string: {
		camelCase: stringCamelCase,
		replaceLast: stringReplaceLast,
		startCase: stringStartCase,
	},
}
