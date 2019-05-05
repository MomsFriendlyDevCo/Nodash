/**
* Export the main objet as a lookup
* I've no idea why you would want this instead of Lodash, this is only really so that you can easily export the main object to the testkits
*/
module.exports = {
	castArray: require('./castArray'),
	escapeRegExp: require('./escapeRegExp'),
	flatten: require('./flatten'),
	get: require('./get'),
	isArary: require('./isArray'),
	omit: require('./omit'),
	pick: require('./pick'),
	promise: {
		allSeries: require('./promise.allSeries'),
	},
	set: require('./set'),
};
