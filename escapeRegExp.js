/**
* Simple function to escape a string so that its compatible with a RegExp
* @param {string} str The input string
* @returns {string} An escaped RegExp compatible string
*/
exports = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
