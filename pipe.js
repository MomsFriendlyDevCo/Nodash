/**
* Composable function piping
* Works as a simple function compositor or using Hack pipe syntax
* @param {*} value The intial value to start with
* @param {function|array} funcs.. The functions to pipe the value via. If an array the format isassumed to be a Hack style pipe of the form `[function, args...]`
* @return {*} Eventual output value
* @url https://github.com/MomsFriendlyDevCo/Nodash
*
* @example Simple pipe using unary functions
* _.pipe(1, increment, increment) //=2
* _.pipe(1, v => v + 1, v => v + 1) //=2
*
* @example Hack style pipes using arrays
* _.pipe(1, [add, '%', 2]) //=3
*/
module.exports = (value, ...funcs) => funcs.reduce((val, func) => {
	if (Array.isArray(func)) { // Hack style syntax
		return func[0].apply(this, func.slice(1).map(f => f === '%' ? val : f));
	} else { // Assume regular function call
		return func(val);
	}
}, value);
