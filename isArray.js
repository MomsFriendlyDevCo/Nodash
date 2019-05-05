/**
* Returns true if the input resembles a classical JS array
* NOTE: Modern browsers now include Array.isArray(foo) which can be used instead!
* @param {*} input The object to examine
* @returns {boolean} True if the input resembles an array
* @url https://github.com/MomsFriendlyDevCo/Nodash
*/
module.exports = input => typeof input == 'object' && Object.prototype.toString.call(input) == '[object Array]';
