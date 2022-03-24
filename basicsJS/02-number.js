//numbers
const max_value = Number.MAX_VALUE;
console.log(
	`Type of Number.max_value = ${typeof max_value} value= ${max_value}`
);

const min_value = Number.MIN_VALUE;
console.log(
	`Type of Number.min_value = ${typeof min_value} value= ${min_value}`
);

const max_safe_integer = Number.MAX_SAFE_INTEGER;
console.log(
	`Type of Number.max_safe_integer = ${typeof max_safe_integer} value= ${max_safe_integer}`
);

const min_safe_integer = Number.MIN_SAFE_INTEGER;
console.log(
	`Type of Number.min_safe_integer = ${typeof min_safe_integer} value= ${min_safe_integer}`
);

/**
 *  the number type has three symbolic values:
 * +Infinity, -Infinity, and NaN ("Not a Number").
 *
 */

const plusInfinity = +Infinity;
console.log(
	`Type of +Infinity = ${typeof plusInfinity} value= ${plusInfinity}`
);
// Type of +Infinity = number value= Infinity

const minusInfinity = -Infinity;
console.log(
	`Type of -Infinity = ${typeof minusInfinity} value= ${minusInfinity}`
);
// Type of -Infinity = number value= -Infinity

console.log('Infinity === +Infinity =>', Infinity === +Infinity);
//true
console.log('Infinity === Infinity =>', Infinity === Infinity);
//rue
console.log('-Infinity === -Infinity =>', -Infinity === -Infinity);
// true
console.log('Infinity === -Infinity =>', Infinity === -Infinity);
//false

// 0 is represented as both -0 and +0 (specific case)
console.log('+0 === -0 =>', +0 === -0);
// true
// but this has one exception

console.log(`1/0= `, 1 / 0);
// Infinity
console.log(`1/-0`, 1 / -0);

// NaN
const notANumber = NaN;
console.log(`Type of NaN= ${typeof notANumber} value= ${notANumber}`);

// to check if given value is nubmer or not

console.log('is 5 not a number = ', isNaN(5));
console.log('is "5" not a number = ', isNaN('5'));
console.log('is "text" not a number = ', isNaN('text'));

//BigInt

/**
 * A BigInt is created by appending n to the end of an integer or by calling the constructor.
 *
 * we can go beyong Number.MAX_SAFE_INTEGER with bigint
 */

let bigint = BigInt(Number.MAX_SAFE_INTEGER);
bigint = bigint + 1n;
console.log(`Type of bigint= ${typeof bigint} value= ${bigint}`);

console.log(
	'Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2 => ',
	Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2
);
//true

console.log(
	'BigInt(Number.MAX_SAFE_INTEGER + 1) ===  BigInt(Number.MAX_SAFE_INTEGER + 2) => ',
	BigInt(Number.MAX_SAFE_INTEGER) + 1n === BigInt(Number.MAX_SAFE_INTEGER) + 2n
);
//false

// Tip: convert string number to number using +

const strNum = '5.5';
const convertedStrNum = +strNum;
console.log(`typeof strNum = ${typeof strNum} value= ${strNum}`);
console.log(
	`typeof convertedStrNum = ${typeof convertedStrNum} value= ${convertedStrNum}`
);

//other ways to convert to number

console.log(
	`parseInt("5") = ${parseInt('5')},  parseInt("5.5") = ${parseInt('5.5')}`
);

console.log(
	`parseFloat("5") = ${parseFloat('5')},  parseFloat("5.5") = ${parseFloat(
		'5.5'
	)}`
);
