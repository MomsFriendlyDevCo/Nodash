/**
* Set a deeply nested value of a complex object
* This if functionally the same as Lodash's set() function
* NOTE: The object is mutated in place
* @param {*} item The item to traverse
* @param {string} path The dotted notation path to retrieve
* @param {*} value The value to set
* @return {*} The traversed object
* @url https://github.com/MomsFriendlyDevCo/Nodash
*/
export default function set(item, path, value) {
	let target = item;
	let pathPieces = path.split('.');
	for (let i = 0; i < pathPieces.length - 1; i++) {
		if (!target[pathPieces[i]]) target[pathPieces[i]] = {};
		target = target[pathPieces[i]];
	}
	target[pathPieces[pathPieces.length -1]] = value;
	return target;
}
