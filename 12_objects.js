// let mysym = Symbol("key")

let user = {
    name: "Usama",
    job: "developer",
    email: "abc@gmail.com",
    // [mysym]: "key",
    phone: 1234567,
    haveCars: true,
    listOfCars: ["lx570", "lx600", "lc300"],
    "fav car": "lx600"
}

// console.log(user.name);
// console.log(user["listOfCars"][0]);
// console.log(user["fav car"]);
// console.log(user[mysym]);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// user.name = "anas"
// user['name'] = "okasha"
// console.log(user);
// Object.freeze(user)
// user['job'] = "accountant"

// user.worth = function () {
//     return ("thirty thee thousand dollar");
// }

// console.log(user.worth());

// user.greeting = function () {
//     return (`Hello ${this.name} good morning`)
// }
// console.log(user.greeting());

// let obj1 = {
//     car: "lexus",
//     model: "600",
//     color: "white"
// }
// let obj2 = {
//     car: "mercedes",
//     model: "s600",
//     color: "black",
// }

// let combineObj = Object.assign({}, obj1, obj2)
// // const combineObj = {...obj1, ...obj2}
// console.log(combineObj)
// console.log(combineObj === obj1);

//  nasted object 

// const student = {
//     name: "bilal",
//     roll_no: 10000,
//     class: "9th",
//     subjects: {
//         sub1: "Maths",
//         sub2: "Chemistry",
//         sub3: "computer",
//         compulsory: {
//             cSub1: "english",
//             cSub2: "history"
//         }
//     }
// }
// console.log(student["subjects"]["sub1"]);
// console.log(student.subjects.compulsory.cSub1)
// console.log(student["subjects"]["compulsory"]["cSub2"]);

// Array of abjetcs;

// let clients = [
//     {
//         company: "noor ltd",
//         ceo: "Mr Noor",
//     },

//     {
//         company: "jack ltd",
//         ceo: "adam"
//     }
// ]
// console.log(clients[1]["company"]);

// console.log(user.hasOwnProperty("name")); // will check property and answer in true and false

// console.log(Object.values(user))

console.log(Object.entries(user));