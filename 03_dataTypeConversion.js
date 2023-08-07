let num = 40;
console.log(typeof num); // output will be "number"

num = "40"
console.log(typeof num); // output will be "string"

  // For Number()
let num1 = Number(num)
console.log(typeof num1); 

// output will be "number" because The Number() method converts a value to a number. If the value cannot be converted, NaN is returned eg: num = "344abc" etc...

num = "334abc";
let num2 = Number(num);
console.log(typeof num2); // output wil be "number"
console.log(num2); //  output will be NaN because num = 334abc is not a number

num = null
let num3 = Number(num);
console.log(typeof num3); // output will be number
console.log(num3); // here the output will be "0"

num = undefined;
let num4 = Number(num);
console.log(typeof num4); // output will be number
console.log(num4); // output will be NaN

num = true;
let num5 = Number(num)
console.log(num5); // output will be "1" as true value in number is always 1

num = false;
let num6 = Number(num)
console.log(num6); // output will be "0" as true value in number is always 0

    // For Boolean
let isSignIn = 1 
let boolIsSignIn = Boolean(isSignIn); 
console.log(boolIsSignIn) 
// 1 and any other value will bring output true and "" empty and 0 will bring output false;

//   For String()

let value = 23;
let stringValue = String(value)
console.log(typeof stringValue) // outPut will be "string"







