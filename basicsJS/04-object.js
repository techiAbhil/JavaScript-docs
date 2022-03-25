const target = {
	a: 1,
	b: 2,
	d: 'd',
};
const source = {
	b: 4,
	d: 5,
	c: {
		// this will get shallow copied
		c1: 'c1',
	},
};

console.log(''.padStart(25, '-'), 'start of Object Assign', ''.padEnd(25, '-'));

// ojbect assign is used for shallow copy one or more objects into another
const merged = Object.assign(target, source);
merged.d = 10;
merged.c.c1 = 'updated';
console.log('merged = >', merged);
console.log('target =>', target);
console.log('source =>', source);

console.log('ES6 way of merging object =>', { ...target, ...source });

console.log(''.padStart(25, '-'), 'End of Object Assign', ''.padEnd(25, '-'));

// ------------------------- End of Object Assign -------------------------

console.log(
	`${''.padEnd(25, '-')} Start of Object.create ${''.padEnd(25, '-')}`
);

// object.create => creates new object with setting existing object as prototype of new object

const testObj = {
	firstName: 'Abhialsh',
	lastName: 'Virat',
	getName: function () {
		`${this.firstName} ${this.lastName}`;
	},
};

const createdObj = Object.create(testObj);
console.dir(createdObj);
console.log(createdObj.getName());

console.info(
	'Its a special type of object, without any proto =>',
	Object.create(null)
);

// object.create accepts 2nd prop as object propert descriptor
const objCreateWitDefineProps = Object.create(Object.prototype, {
	// foo is a regular 'value property'
	foo: {
		writable: true,
		configurable: true,
		value: 'hello',
	},
	bar: {
		enumerable: true,
		writable: true,
		configurable: true,
		value: 'bar',
	},
});

console.log('objCreateWitDefineProps => ', objCreateWitDefineProps);

console.log(`${''.padEnd(25, '-')} End of Object.create ${''.padEnd(25, '-')}`);

console.log(
	`${''.padEnd(25, '-')} start of Object.entries ${''.padEnd(25, '-')}`
);
const testObject = {
	name: 'abhilash virat',
	age: 29,
};

console.log(`Object.entries on  ${testObject}=> `, Object.entries(testObject));
console.log(
	`${''.padEnd(25, '-')} end of Object.entries ${''.padEnd(25, '-')}`
);

console.log(
	`${''.padEnd(25, '-')} start of Object.freeze ${''.padEnd(25, '-')}`
);
// does not allow to add, delete or update any property
// note that only immidiate props can be freezed not the nested one

const freezedObject = Object.freeze({
	prop1: 10,
	prop2: {
		nested: 1,
	},
});

/**
 * 1. cant add prop
 * 2. cant delete prop
 * 3. cant update prop
 */

console.log(
	`freezedObject => `,
	freezedObject,
	`\nObject.isFrozen(freezedObject) =>`,
	Object.isFrozen(freezedObject)
);
freezedObject.test = '123';
delete freezedObject.prop1;
freezedObject.prop2.nested = 'THis can be changed';
console.log(`after chages freezedObject => `, freezedObject);
delete freezedObject.prop2.nested;
console.log(`after deleting nested freezedObject => `, freezedObject);

console.log(`${''.padEnd(25, '-')} end of Object.freeze ${''.padEnd(25, '-')}`);

console.log(
	`${''.padEnd(25, '-')} start of Object.preventExtensions ${''.padEnd(
		25,
		'-'
	)}`
);
// The Object.preventExtensions() method prevents new properties from being added

const preventAddObject = Object.preventExtensions({
	test: 1,
	toBeDeleted: 'delete',
});

/**
 * 1. cant add prop
 * 2. can delete prop
 * 3. can update prop
 */

console.log(
	`before operations on preventExtensions  => `,
	preventAddObject,
	'\ncan add new prop => ',
	Object.isExtensible(preventAddObject)
);
preventAddObject.age = 29;
preventAddObject.test = 30;
delete preventAddObject.toBeDeleted;
console.log(`after preventExtensions => `, preventAddObject);

console.log(
	`${''.padEnd(25, '-')} end of Object.preventExtensions ${''.padEnd(25, '-')}`
);

console.log(`${''.padEnd(25, '-')} start of Object.seal ${''.padEnd(25, '-')}`);
/**
 * The Object seal method
 * 1. cant add prop
 * 2. cant delete prop
 * 3. can change prop
 *
 **/

const sealedObject = Object.seal({
	test: '123',
	cantDelete: 'delete',
});

console.log(
	`before operations on sealedObject  => `,
	sealedObject,
	'\nis obejct sealed => ',
	Object.isSealed(sealedObject)
);

sealedObject.test = 'Test';
delete sealedObject.cantDelete;
sealedObject.newProp = 'asdf';

console.log(`after preventExtensions => `, sealedObject);

console.log(`${''.padEnd(25, '-')} end of Object.seal ${''.padEnd(25, '-')}`);

console.log(
	`${''.padEnd(25, '-')} Start of Object.setPrototypeOf() ${''.padEnd(25, '-')}`
);

/**
 * Object.setPrototypeOf(obj, prototype) set the prototypeof object
 * It is a slow process
 * Note: insted of this method Object.create is recommended as it creates a new object
 *
 *
 */

const setProtoParentObj = {
	parent: 'parent',
};

const setProtoChildObj = {
	log: () => console.log('I just print child'),
};

console.dir('before setting prototype of obj', setProtoParentObj);

/**
 * One important note here the below statemnt Object.setPrototypeOf
 * will be exicuted before printing above console log
 * so both above & below console.log statment will provide the same result
 */

Object.setPrototypeOf(setProtoParentObj, setProtoChildObj);

console.dir('after setting prototype of obj', setProtoParentObj);

console.log(
	`${''.padEnd(25, '-')} end of Object.setPrototypeOf() ${''.padEnd(25, '-')}`
);

console.log(
	`${''.padEnd(25, '-')} start of Object.values() ${''.padEnd(25, '-')}`
);

const object1 = {
	a: 'somestring',
	b: 42,
	c: false,
};
console.log(`Original Object => `, object1);
console.log(`Object.values => `, Object.values(object1));

console.log(
	`${''.padEnd(25, '-')} end of Object.values() ${''.padEnd(25, '-')}`
);
