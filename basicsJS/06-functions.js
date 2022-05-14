/**
 * Declaring functions
 */

function fun1() {
	// statement function or declarative function
	// these functions can be called even before declaring it
	console.log('1 way of declaring functions');
}
console.dir('fun1 => ', fun1);
fun1();

const fun2 = function () {
	// named function
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

function fun() {
	var i = 10;

	function getNamedFunction() {
		console.log(this);
	}

	const getArrowFunction = () => {
		console.log(this);
	};

	getNamedFunction(); //this will point to window/global object
	getArrowFunction(); //this will point to window/global object

	getNamedFunction.call(i); // this will point to i
	getArrowFunction.call(i); //this will still point to window/global object
}

fun();

/**
 * Key points:
 *  1. When this is used within an object's function, it will point to current object
 * 	2. When this is used within function it will always point to window object
 * 	3. In both of the above cases the arrow function will always point to window object (even if we bind the object)
 */

// uncomment following function & run it  to check
//  function fun(name) {
//     this.name = name;
//     this.printName = function() {
//         console.log(this, this.name) //this will point to current object
//     }

//     this.printNameArrow = () => {
//         console.log(this, this.name) //this will point to current object
//     }
// }

// fun.prototype.getName = function() {
//     console.log(this, this.name)
//     // point to current object
// }

// fun.prototype.getNameArrow = () => {
//     console.log(this, this.name)
//     // point to window object
// }

// const f = new fun('abhialsh');

// f.printName();
// f.printNameArrow();
// f.getName();
// f.getNameArrow();
