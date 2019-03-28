/**
* Check that the input is a classic array and coherse into an array if not
* @param {*} input The input object to check
* @returns {array} The cohersed version of input - or just input if its already an array
*/
exports = input =>
	input == 'object' && Object.prototype.toString.call(input) == '[object Array]'
	? input
	: [input];
