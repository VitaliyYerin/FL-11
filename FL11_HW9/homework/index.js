const data = [{
	'_id': '5b5e3168c6bf40f2c1235cd6',
	'index': 0,
	'birthday': '2016-03-18T00:00:00',
	'eyeColor': 'green',
	'name': 'Stein',
	'favoriteFruit': 'apple'
},
{
	'_id': '5b5e3168e328c0d72e4f27d8',
	'index': 1,
	'birthday': '1991-02-11T00:00:00',
	'eyeColor': 'blue',
	'name': 'Cortez',
	'favoriteFruit': 'strawberry'
},
{
	'_id': '5b5e3168cc79132b631c666a',
	'index': 2,
	'birthday': '1984-04-17T00:00:00',
	'eyeColor': 'blue',
	'name': 'Suzette',
	'favoriteFruit': 'apple'
},
{
	'_id': '5b5e31682093adcc6cd0dde5',
	'index': 3,
	'birthday': '1994-04-17T00:00:00',
	'eyeColor': 'green',
	'name': 'George',
	'favoriteFruit': 'banana'
}
];

let number = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9
}

// Task 0

function getNumbers(str) {
	let numbers = [];
	let strArr = str.split('');

	for (let i = 0; i < strArr.length; i++) {

		if (!isNaN(strArr[i])){
			numbers.push(+strArr[i]);
		}
	}

return numbers;
}

console.log(getNumbers('n1um3ber95'));

// Task 1

function findTypes() {
	let obj = {};

	for (let i = 0; i < arguments.length; i++){
		let objKey = typeof arguments[i];
		obj[objKey] = ++obj[objKey] || number.one;
	}
	return obj;
}
console.log(findTypes('number'));
console.log(findTypes(null, number.five, 'hello'));

// Task 2

function executeForeEach(arr, func) {
	for(let i = 0; i < arr.length; i++){
		func(arr[i]);
	}
}
executeForeEach([number.one, number.two, number.three], function(el) {
	console.log(el);
});

// Task 3

function mapArray (arr,func) {
	let transformed = [];
	executeForeEach(arr, function(el) {
		transformed.push(func(el));
	})
	return transformed;
}
console.log(mapArray([number.two, number.five, number.eight], function(el) {
	return el + number.three;
	}))

// Task 4

function filterArray(arr, func) {
	let filtered = [];
	executeForeEach(arr, function(el) {
		if (func(el)) {
			filtered.push(el);
		}
	})
	return filtered;
}
console.log(filterArray([number.two, number.five, number.eight], function(el) {
	return el > number.three;
}));

// Task 5

function showFormattedDate(date) {
	const MONTHS_IN_YEAR = ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Oct','Now','Dec'];
	let day = date.getDate();
	let monthIndex = date.getMonth();
	let year = date.getFullYear();
return 'Date:' + ' ' + MONTHS_IN_YEAR[monthIndex] + ' ' + day + ' ' + year;
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

// Task 6

function canConvertToDate(date) {
	return !!Date.parse(date);
}

console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));

// Task 7

function daysBetween( date1, date2 ) {
	const ONE_DAY = 86400000; //milseconds in day
	let date1_ms = date1.getTime();
	let date2_ms = date2.getTime();
	let difference_ms = date2_ms - date1_ms;
return Math.round(difference_ms/ONE_DAY); 
}

console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

// Task 8

function getAmountOfAdultPeople(data) {
	const now = new Date();
	const age = 18;
	const days = 365;
	const filteredData = filterArray(data, function (item) {
		let newData = new Date(item['birthday']);
		return Math.round(daysBetween(now, newData) / days) > age;
	});

	return filteredData.length;
}

console.log(getAmountOfAdultPeople(data));

// Task 9

function keys(obj) {
	let arrKeys = [];
	for(let key in obj) {
		if (obj.hasOwnProperty(key)) {
			arrKeys.push(key);
		}
	}
	return arrKeys;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

// Task 10

function values(obj) {
	let arrValues = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			arrValues.push(obj[key]);
		}
	}
	return arrValues;
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));