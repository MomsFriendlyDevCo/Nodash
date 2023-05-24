/**
* Return a promise that pauses for the given number of milliseconds
* @param {number} time The amount of milliseconds to pause before resolving
* @returns {Promise}
* @url https://github.com/MomsFriendlyDevCo/Nodash
*/
export default function promiseTimeout(time) {
	return new Promise(resolve => setTimeout(resolve, time));
}
