const parentObj = {
	name: 'abhilash',
	organization: 'Persistent',
};

function print() {
	console.log('print = ', this);
}
const newObj = Object.setPrototypeOf(parentObj, { print });

// newObj.__proto__.print = print;
// Object.setPrototypeOf(newObj, print);

console.dir(newObj);
console.log(newObj.print());
