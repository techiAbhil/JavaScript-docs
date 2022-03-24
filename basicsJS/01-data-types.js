// Boolean

const booleanValue = false;
console.log(`Type of boolean = ${typeof booleanValue} value= ${booleanValue}`);
// Type of a = boolean value of a = false

//null
const nullType = null; // null type has only one value i.e null
/**
 * In JavaScript, null is marked as one of the primitive values,
 * because its behavior is seemingly primitive.
 *
 * but the typeOf operator will return "object" for type of null
 * as Every Object is derived from null value,
 */
console.log(`Type of null = ${typeof nullType} value= ${nullType}`);
//Type of nullType = object value of nullType = null

// undefined

/**
 *   if we do not assign any value then the js will implicitly
 *   assign undefined to unkonw values
 */
let unknown;
console.log(`Type of undefined = ${typeof unknown} value= ${unknown}`);
// Type of unknown = undefined value of unknown = undefined

// number

const num = 5.5;
console.log(`Type of number= ${typeof num} value= ${num}`);
//Type of number= number value= 5.5

// string

const str = 's'; //const str = "str"
console.log(`Type of str=${typeof str} value= ${str}`);
