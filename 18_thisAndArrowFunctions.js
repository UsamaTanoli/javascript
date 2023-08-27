// const user = {
//     name: "shaban",
//     id: 11223344,
//     email: "shaban@gmail.com",
//     loginMassage: function login(){
//         console.log(this)
//         return `${this.name}, you have logged in succesfully`
// }
// }
// console.log(user.loginMassage());
// user.name = "anas"
// console.log(user.loginMassage());

// console.log(this);

// function name() {
//     console.log(this)
// }
// name()

//  let func = function () {
//     console.log(this);
//  }
//  func()

//**********************************Arrow Function**************************************//

// const thisForArrowFunc = () => {
//     console.log(this)
// }
// thisForArrowFunc()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(22,33));

// we can write arrow with implicit return


// const subTwo = (num1, num2) => num1 - num2

// console.log(subTwo(23, 4));

// we can also write above function like this 


const subTwo = (num1, num2) => (num1 - num2)
console.log(subTwo(12, 6));

// return object in implicit return function
// const objReturnFunc = () => {name: "usama"} // this will show error because implicit return function does not have "{}"
const objReturnFunc = () => ({name: "usama"}) //to run this we have to wrap objects in "()"

