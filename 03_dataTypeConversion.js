// let num = 40;
// console.log(typeof num); // output will be "number"

// num = "40"
// console.log(typeof num); // output will be "string"

//   // For Number()
// let num1 = Number(num)
// console.log(typeof num1); 

// // output will be "number" because The Number() method converts a value to a number. If the value cannot be converted, NaN is returned eg: num = "344abc" etc...

// num = "334abc";
// let num2 = Number(num);
// console.log(typeof num2); // output wil be "number"
// console.log(num2); //  output will be NaN because num = 334abc is not a number

// num = null
// let num3 = Number(num);
// console.log(typeof num3); // output will be number
// console.log(num3); // here the output will be "0"

// num = undefined;
// let num4 = Number(num);
// console.log(typeof num4); // output will be number
// console.log(num4); // output will be NaN

// num = true;
// let num5 = Number(num)
// console.log(num5); // output will be "1" as true value in number is always 1

// num = false;
// let num6 = Number(num)
// console.log(num6); // output will be "0" as true value in number is always 0

//     // For Boolean
// let isSignIn = 1 
// let boolIsSignIn = Boolean(isSignIn); 
// console.log(boolIsSignIn) 
// // 1 and any other value will bring output true and "" empty and 0 will bring output false;

// //   For String()

// let value = 23;
// let stringValue = String(value)
// console.log(typeof stringValue) // outPut will be "string"


//**********************************operationa***********************************/

let myValue = 55
let myValue2 = 44
let sumValue = myValue+myValue2
console.log(sumValue);
let negValue = -sumValue
console.log(negValue);

// console.log(2+2);
// console.log(3-2);
// console.log(4*2);
// console.log(7/3);
// console.log(3%2); // "%" sign is used for remainder
// console.log(2**2); // ** is used as an exponent


console.log(1+"1")
console.log("2"+1)
console.log("2"+1+3)
console.log(2+3+"2")//

console.log(2*4/4+3-6%1) // do not write this sort of code

// let num1, num2, num3 
// num1 = num2 = num3 = 2 +2
// console.log(num1)     // not preferable

// *******************postfix and prefix********************

// postfix means operator comes after operand (x++) this return value after incrementing

let x = 4;
let y = x++ // y = 4 // x = 5
console.log(y) // output will be 4

let z = 5
z = z++
console.log(z); // output will be 5

// Prefix: the operator comes before the operand (++a). Using it as a prefix returns the value
// after incrementing.

a = 3;
b = ++a // here b = 4 // a = 4
console.log(b);


