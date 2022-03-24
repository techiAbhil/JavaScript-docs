const str =
	'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is';

console.log(str);
console.log(`str.charAt(1) = ${str.charAt(1)}`);
console.log(`"abhilash".endsWith('lash') => `, 'abhilash'.endsWith('lash'));
console.log(`"abhilash".includes('bhil') => `, 'abhilash'.includes('bhil'));

console.log(`str.indexOf('ipsum') =>`, str.indexOf('ipsum'));
console.log(
	`str.indexOf('not found string') =>`,
	str.indexOf('not found string')
);

console.log(
	`"test 123 test".lastIndexOf('test') =>`,
	'test 123 test'.lastIndexOf('test')
);

console.log(
	`'abhilash'.concat(' M.', ' ', 'virat') =>`,
	'abhilash'.concat(' M.', ' ', 'virat')
);

console.log(
	`"Abhilash".padStart(5, '.') => `,
	'Abhilash virat'.padStart(25, '.')
);
console.log(`"Abhilash".padEnd(5, '.') => `, 'Abhilash virat'.padEnd(25, '.'));

console.log(`"Abhilash".repeat(5) => `, 'Abhilash '.repeat(5));

console.log(`"Abhilash".substring(1,5) => `, 'Abhilash'.substring(1, 5));

console.log(
	`"abhialsh virat".toUpperCase() => `,
	'abhialsh virat'.toUpperCase()
);

console.log(
	`"ABHIALSH VIRAT".toLowerCase() => `,
	'ABHIALSH VIRAT'.toLowerCase()
);

console.log(
	`" abhilash Virat   ".trimStart() =>`,
	' abhilash Virat   '.trimStart()
);

console.log(
	`" abhilash Virat   ".trimEnd() =>`,
	' abhilash Virat   '.trimEnd()
);

console.log(`" abhilash Virat   ".trim() =>`, ' abhilash Virat   '.trim());

console.log(
	`String.fromCharCode(65, 66, 67) =>`,
	String.fromCharCode(65, 66, 67)
);

const num = 5;
console.log('Convert 5 to binary => ', num.toString(2));

console.log(
	`'My Name is Abhilash'.slice(11) => `,
	'My Name is Abhilash'.slice(11)
);

console.log(
	`'My Name is Abhilash'.replace('Abhilash', 'Vicky') => `,
	'My Name is Abhilash'.replace('Abhilash', 'Vicky')
);

console.log(
	`convert string to array => 'Abhialsh'.split('') =>`,
	'Abhialsh'.split('')
);

console.log(`convert string to array => [...'Abhilash'] =>`, [...'Abhilash']);
