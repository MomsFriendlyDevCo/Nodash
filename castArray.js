/**
* Check that the input is a classic array and coherse into an array if not
* @param {*} input The input object to check
* @returns {array} The cohersed version of input - or just input if its already an array
* @url https://github.com/MomsFriendlyDevCo/Nodash
*/
export default function castArray(input) {
	return Array.isArray(input) ? input : new Array(input);
}
