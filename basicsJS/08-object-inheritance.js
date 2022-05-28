const Monster = {
	canAttack: function () {
		console.log(`${this.name} can attack`);
	},
};
console.log(Monster);

// way 1: of inheritance
const walkingMonster = Object.create(Monster, {
	name: {
		value: 'Bear',
	},
	canWalk: {
		value: function () {
			console.log(`${this.name} can walk`);
		},
	},
});

console.log('walkingMonster = ', walkingMonster);
walkingMonster.canAttack();
walkingMonster.canWalk();

const flyingMonster = {
	name: 'Eagale',
	canFly: function () {
		console.log(`${this.name} can Fly`);
	},
};

// way 2: of inheritance
Object.setPrototypeOf(flyingMonster, walkingMonster);

console.log('flyingMonster = ', flyingMonster);
flyingMonster.canAttack();
flyingMonster.canWalk();
flyingMonster.canFly();

const swimmingMonster = {
	name: 'Aligator',
	canSwim: function () {
		console.log(`${this.name} can Swim`);
	},
};

// way 3: of inheritance
swimmingMonster.__proto__ = walkingMonster;

console.log('swimmingMonster = ', swimmingMonster);
swimmingMonster.canAttack();
swimmingMonster.canWalk();
swimmingMonster.canSwim();

/**
 * Note: flying monster & swimming monster posses the properties of monster + walking monster object
 */
