/**
* Return a function which acts as a throttle on a wrapped function
* @param {function} cb Function to call when the throttle expires
* @param {number} wait Maximum time to wait before invoking the function
* @url https://github.com/MomsFriendlyDevCo/Nodash
*/
export default function functionThrottle(cb, wait) {
	let throttleTimer;
	let reschedule = ()=> {
		clearTimeout(throttleTimer);
		throttleTimer = setTimeout(cb, wait);
	};

	return ()=> reschedule();
}
