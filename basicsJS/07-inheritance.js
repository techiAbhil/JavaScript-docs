function Parent(name) {
	this.name = name;
	this.printName = function () {
		console.log(`Calling from Parent & name = `, this.name);
	};
}

Parent.prototype.getName = function () {
	return this.name;
};

//  console.log(Parent('Abhil')); //undefined

const obj = new Parent('Abhil'); //undefined
obj.printName(); //Calling from Parent & name =  Abhil
obj.printName.call({ name: 'Virat' }); //Calling from Parent & name =  Virat
console.log(obj.getName()); // Abhil

/**  const testObj = Parent.call({ name: 'test' });
 this has no effect here the testObj will be undefined
*/
function Child(age, name) {
	Parent.apply(this, [name]);
	// alternatively we can also use Parent.call(this, name);
	this.age = age;
	this.printAge = function () {
		console.log(`Calling from Child & age = `, this.age);
	};
}

const childObj = new Child(29, 'Superman');
childObj.printAge(); //Calling from Child & age =  29
childObj.printName(); //Calling from Parent & name =  Superman

/**
 * console.log('Prototype methond = ', childObj.getName()); 
this call will fail, cause child constructor does not have access to 
Parent constructors prototype methods 
*/

console.log(childObj instanceof Child); //true
console.log(childObj instanceof Parent); //false

/**
 * Summary: This is not a true inheritance since we are calling Parent class constructor in
 * child class & it is returning us the Parent constructor object inside the Child constructor.
 * That is the reason we are not able to access the proprties of Prototype methods of
 * Parent constructor inside child
 */
