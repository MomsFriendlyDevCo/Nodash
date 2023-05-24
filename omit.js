/**
* Return an object omitting a single or array of keys
* This function returns a shallow copy of the original and does NOT mutate in place
* @param {Object} input The input object to modify
* @param {Set|string|array <string>} keys The keys to omit from the input object
* @returns {Object} A shallow copy of the input object with the omitted fields omitted
* @url https://github.com/MomsFriendlyDevCo/Nodash
*/
export default function omit(input, keys) {
	let ids = keys instanceof Set ? keys : new Set(Array.isArray(keys) ? keys : [keys]);
	return Object.keys(input).reduce((t, k) => {
		if (!ids.has(k)) t[k] = input[k];
		return t;
	}, {});
}
