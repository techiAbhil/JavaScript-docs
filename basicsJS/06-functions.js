/**
 * Declaring functions
 */

function fun1() {
	// named function expression
	console.log('1 way of declaring functions');
}
console.dir('fun1 => ', fun1);
fun1();

const fun2 = function () {
	// anonymous function expression
	console.log('2nd way of declaring functions');
};
console.dir('fun2 => ', fun2);
fun2();

const fun3 = () => {
	// arrow function
	console.log('3rd way of declaring functions');
};
console.dir('fun3 => ', fun3);
fun3();

(function () {
	console.log('This is  IIFE (Immediately Invoked Function Expression)');
})();

function* generatorFun() {
	/**
	 *  This is a generator funtion calling this will now invoke the function,
	 *  but return a iterator object
	 *  Calling next method on this iterator object will return {value: yield value: done: false}
	 *  When done is true it means we have iterated over all the values of generator function
	 **/
	for (let i = 0; i < 5; i++) {
		yield i;
	}
}

const iteratorObj = generatorFun();
console.dir(iteratorObj);

let res = iteratorObj.next();

while (!res.done) {
	console.log(res);
	res = iteratorObj.next();
}
console.log('res => ', res);

// some gotchas

//getters & setters

const testObj = {
	get getName() {
		return this.name;
	},
	set setName(name) {
		this.name = name;
	},
};

console.log(testObj.getName);
console.log((testObj.setName = 'vicky'));
console.log(testObj.getName);

//in the below example see the arrow functions do not work as expected
// as arrow function dont have their own this

var obj = {
	// does not create a new scope
	i: 10,
	b: () => console.log(this.i, this),
	c: function () {
		console.log(this.i, this);
	},
};

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
