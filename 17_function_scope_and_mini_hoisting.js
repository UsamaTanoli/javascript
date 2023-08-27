function name1() {
    const myName = "usama";
    function name2() {
        const lastName = "aijaz"
        return `name ${myName} call in name2()` // it will execute because we can call variable of outer function of nested function in inner nested function

    } // scope of name2 ends here

    console.log(name2());
    //    console.log(lastName) // here error will return because we can not call inner value on name2() inside name1() because function scope
    console.log(`name ${myName} calls in name1()`);

}
name1()

if(true){
    const value = 12;
    if(value === 12){
        const anotherValue = 32;
        console.log(value);
        console.log(value + anotherValue);
    }
    // console.log(anotherValue); // through error because of scope like above
    console.log(value);
}
// console.log(value); //also through error

//***********************************************************************************************//
// we can call function before initialization

console.log(addTwo(4));

function addTwo(value) {
    return value + 2;
}
// console.log(addTwo(3));


console.log(addFour(2)); //we can't call function expression before initialization this will through ReferenceError

let addFour = function(value) {
    return value + 4
}
console.log(addFour(4));
//this above function is called function expression when assign function to a variable 