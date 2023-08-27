//######################## IIFE #########################//
//An Immediately Invoked Function Expression (IIFE) is a JavaScript programming pattern that allows you to define and execute a function all in one step. It's commonly used to create a local scope for variables to avoid polluting the global scope and to encapsulate code. Here's the basic structure of an IIFE;

// (function () {
//     //Your code here
// })();

// function myname(){
//     let name = "anas"
//     console.log(name);
// }
// myname()
// you can call above function from every where because its global

(function callName() {
    let name = "usama";
    console.log(name);
})(); //";" is must used to end function here  

// callName()// here you can't call it because scope is local 
(()=>{
    let age = 19;
    console.log(age);
})();

//In JavaScript, there's no direct syntax for creating an Immediately Invoked Named Arrow Function Expression but you can achieve a similar effect by assigning an arrow function to a variable with a name and then immediately invoking it.

let cka = (()=>{
    let fullForm = "certified kubernetes administrator"
    // console.log(fullForm);
    return fullForm
})();

console.log(cka);