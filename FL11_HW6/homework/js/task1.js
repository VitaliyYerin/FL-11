const a1 = parseInt(prompt('Enter the numeric value of the point a1', ''));
const a2 = parseInt(prompt('Enter the numeric value of the point a2', ''));
const b1 = parseInt(prompt('Enter the numeric value of the point b1', ''));
const b2 = parseInt(prompt('Enter the numeric value of the point b2', ''));
const c1 = parseInt(prompt('Enter the numeric value of the point c1', ''));
const c2 = parseInt(prompt('Enter the numeric value of the point c2', ''));
const devider = 2;
const calcCenter1 = (a1 + b1) / devider;
const calcCenter2 = (a2 + b2) / devider;
const isInCenter = calcCenter1 === c1 && calcCenter2 === c2;

console.log(isInCenter);