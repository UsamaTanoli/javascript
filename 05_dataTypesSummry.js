// premitive data types

// String, Number, Boolean, null, undefined, Symbol, BinInt

const name = "usama"
const age = 22;
const isMarried = false;
const isFighter = null;
let uEmail;

let number = Symbol(123)
let number2 = Symbol(123)
//Symbol must be unique. eg
console.log(number === number2)

let num_bigInt =23455332234n    // use n in num js treat this as BigInt
console.log(typeof num_bigInt)

//    non_primitive(Reference) data types

// Array
// Objects
// Functotions

const myArray = [1,2,3,4,5,6];

let myObj = {
    name: "usama",
    fatherName: "Aijaz",
    age: 16
}

function abc() {
    console.log("hello world")
}

// similarly you can assign function in variable

let myFunction = function(){
    console.log("Hello developers")
}