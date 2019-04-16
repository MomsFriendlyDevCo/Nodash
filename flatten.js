/**
* Flatten an array by one level
* NOTE: This assumes all items are arrays
* @param {array <array>} arr Array-of-arrays
* @return {array} One level flatter input
* @url https://github.com/MomsFriendlyDevCo/Nodash
*/
module.exports = arr => [].concat.apply([], arr);
