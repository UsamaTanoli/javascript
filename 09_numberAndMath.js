let num = 500;
console.log(num);

let num1 = new Number(200);
console.log(num1);

let numstring = num.toString().length
console.log(numstring)

let num2 = 33.933335
let numFixed = Number(num2.toFixed(2))
console.log(numFixed)

let num3 = 123.98
let precNum = num3.toPrecision(4)
console.log(precNum)

let num4 = 200000;
let numPres = num4.toLocaleString()
console.log(numPres);


// ************************Maths***************************

let math1 = -456
let absMath = Math.abs(math1) // convert neg value to positive;
console.log(absMath)

let value = 23.445
console.log(Math.round(value))
// The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
console.log(Math.ceil(value)) // 

let maxValue = Math.max(1,3,7,2,4)
console.log(maxValue);

let minValue = Math.min(1,2,8,3,0)
console.log(minValue);

let squValue = Math.sqrt(25)
console.log(squValue);

let x = 3;
let power = Math.pow(x, 3); // syntex Math.pow(base, exponent)
console.log(power);

let random = Math.random() // it will generate random num b/w 0 to 0.9

// if we want to generate number 1 >= we have to do below steps
let random1 = (random*10) + 1
console.log(random1)

// if want to remove decimal value then use Math.floor 

let random2 = Math.floor(random1)
console.log(random2)


let min = 20
let max = 30

console.log(Math.floor(Math.random()*(max - min +1))+min);