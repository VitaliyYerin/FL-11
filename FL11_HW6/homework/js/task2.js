const first = parseInt(prompt('length of the first side of the triangle', ''));
const second = parseInt(prompt('length of the second side of the triangle', ''));
const third = parseInt(prompt('length of the third side of the triangle', ''));

if (first + second > third && second + third > first && first + third > second) {
	if (first === second && second === third) {
		console.log('Eequivalent triangle');
	} else if (first === second || second === third || third === first) {
		console.log('Isosceles triangle');
	} else {
		console.log('Normal triangleconst');
	}
} else {
	console.log('Triangle doesn’t exist');
}