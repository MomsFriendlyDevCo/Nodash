/**
* Split a sequence of words by punctuation / spaces and uppercase first letter of each word
* @param {String} str The input string to transform
* @returns {String} The input string in StartCase format
* @url https://github.com/MomsFriendlyDevCo/Nodash
*/
export default function startCase(str) {
	return str
		.split(/[\p{P}\p{Z}]+/u) // Split by Punctuation or Spaces
		.map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
		.join(' ');
}
