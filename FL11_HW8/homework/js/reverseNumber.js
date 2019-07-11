function reverseNumber(num) {
	if (num < 0) {
		num = num.toString().split('').slice(1).reverse().join('');
		return -Math.abs(num);
	} else {
		num = num.toString().split('').reverse().join('');
		return Math.abs(num);
	}
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));