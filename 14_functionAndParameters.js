// Functions In JavaScript: A function is a reusable block of code that performs a specific task or set of tasks. 

// let we want to print below code what if we have to write it again we will write full code agaion
// console.log("h");
// console.log("e");
// console.log("l");
// console.log("l");
// console.log("o");
// console.log("w");

// solution of above problem is in function

// function printHellow() {
//     console.log("h");
//     console.log("e");
//     console.log("l");
//     console.log("l");
//     console.log("o");
//     console.log("w");
// }

// printHellow()
// printHellow()

// function name(given value here called "parameters") {
    
// }
// name(given value here called "arguments")

// function addNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

//right way to declear function
// function addNumbers(num1, num2) {
//     return (num1 + num2)
// }

// addNumbers(1,3)

// let result = addNumbers(1,4)
// console.log(result);

function logInMassage (userName){
    // return `${userName} you logged in succesfully`
    // what if user did not give value or right value
    if (userName === undefined){
        return "you did not give any value"
    }
    else if (typeof userName === "number"){
        return "value must be string"
    }
    else{
        return `${userName} you logged in succesfully`
    }
}
console.log(logInMassage("usama"));