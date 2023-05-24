/**
* Retrieve a deeply nested value of a complex object
* This is functionally the same as Lodash's get() function
* @param {*} item The item to traverse
* @param {string} path The dotted notation path to retrieve
* @return {*} The value of the traversed field or undefined
* @url https://github.com/MomsFriendlyDevCo/Nodash
*/
export default function get(item, path) {
	let target = item;
	let pathPieces = path.split('.');
	for (let i = 0; i < pathPieces.length; i++) {
		if (!target[pathPieces[i]]) {
			target = undefined;
			break;
		}
		target = target[pathPieces[i]];
	}
	return target;
}
