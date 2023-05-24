/**
* Return a shallow copy of an objet running each value though a mutator function
* @param {Object} input The input object
* @param {function} cb The callback to run on each value. Function is executed as `(value, key)`
* @returns {Object} A shallow copy of the input object with each function run through the callback
* @url https://github.com/MomsFriendlyDevCo/Nodash
*/
export default function mapValues(input, cb) {
	return Object.fromEntries(
		Object.entries(input).map(i =>
			[i[0], cb(i[1], i[0])]
		)
	);
}
