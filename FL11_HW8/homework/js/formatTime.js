function formatTime(value) {
	const MINUTES_IN_HOUR = 60; // 60 minutes in one hour
	const MINUTES_IN_DAY = 1440; // 1440 minutes in one day
	let days = Math.floor(value / MINUTES_IN_DAY);
	let hours = Math.floor((value - (days * MINUTES_IN_DAY)) / MINUTES_IN_HOUR);
	let minutes = Math.floor(value - (days * MINUTES_IN_DAY) - (hours * MINUTES_IN_HOUR));
	return days+' day(s) '+hours+' hour(s) '+minutes+' minute(s).'
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));