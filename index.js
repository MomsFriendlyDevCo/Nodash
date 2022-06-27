/**
* Export the main objet as a lookup
* I've no idea why you would want this instead of Lodash, this is only really so that you can easily export the main object to the testkits
*/
module.exports = {
	castArray: require('./castArray'),
	camelCase: require('./camelCase'),
	escapeRegExp: require('./escapeRegExp'),
	flatten: require('./flatten'),
	get: require('./get'),
	isArary: require('./isArray'),
	mapValues: require('./mapValues'),
	omit: require('./omit'),
	pick: require('./pick'),
	pipe: require('./pipe'),
	promise: {
		allLimit: require('./promise.allLimit'),
		allObject: require('./promise.allObject'),
		allSeries: require('./promise.allSeries'),
		timeout: require('./promise.timeout'),
	},
	set: require('./set'),
	throttle: require('./throttle'),
};
