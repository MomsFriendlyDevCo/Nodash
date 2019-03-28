/**
* Set a deeply nested value of a complex object
* This if functionally the same as Lodash's set() function
* NOTE: The object is mutated in place
* @param {*} item The item to traverse
* @param {string} path The dotted notation path to retrieve
* @param {*} value The value to set
* @return {*} The traversed object
*/
module.exports = (item, path, value) => {
	var target = item;
	var pathPieces = path.split('.');
	for (var i = 0; i < pathPieces.length - 1; i++) {
		if (!target[pathPieces[i]]) target[pathPieces[i]] = {};
		target = target[pathPieces[i]];
	};
	target[pathPieces[pathPieces.length -1]] = value;
	return target;
};
