/**
* Return an object picking the keys to include in the new object
* @param {Object} input The input object to modify
* @param {Set|string|array <string>} keys The keys to pick from the input object
* @returns {Object} A shallow copy of the input object with the omitted fields omitted
* @url https://github.com/MomsFriendlyDevCo/Nodash
*/
module.exports = (input, keys) =>
	(
		keys instanceof Set ? Array.from(keys)
		: Array.isArray(keys)
		? keys : new Array(keys)
	)
		.reduce((t, k) => {
			if (input[k] !== undefined) t[k] = input[k];
			return t;
		}, {});
