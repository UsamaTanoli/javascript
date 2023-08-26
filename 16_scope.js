// In JavaScript, the term "scope" refers to the context in which variables and functions are declared and accessed
var a = 11;
let b = 22;
const c = 33;

// we can call a,b,c in any local scope because these have global scope 

console.log(a);
console.log(b);
console.log(c);

console.log("after block scope");
// what if we putt values in block scope
{
    // var a = 12;
    // let b = 23;
    // const c = 34;
    // we can not call b and c outside {} because thay have local scope except a because var = "global scope"
    console.log(b);
    console.log(c);
 }
// console.log(a); // here you see just a will change because var has global scope
// console.log(b);
// console.log(c);

// another example
{
    var x = 1;
    let y = 2;
    const z = 3;
}
// console.log(x); // just x will be print because as you know for global scope
// console.log(y);
// console.log(z);
// uncomment above on by one and check