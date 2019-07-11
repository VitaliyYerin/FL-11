function getMin() {
	let max = arguments[0];

	for (let i = 1; i < arguments.length; i++) {
		max = Math.min(arguments[i], max);
	}

	return max;
}

console.log(getMin(3, 0, -3));