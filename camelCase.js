/**
* Camel case any input string
* This is functionally the same as Lodash's camelCase() function
* @param {string} input The input string to camelize
* @return {string} The input string in camelCase format
* @url https://github.com/MomsFriendlyDevCo/Nodash
*/
module.exports = input => input
	.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
		index === 0 ? word.toLowerCase() : word.toUpperCase()
	)
	.replace(/\s+/g, '');
