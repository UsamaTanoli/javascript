// function plus5(num){
//     this.num = num
//     return num + 5
// }

// plus5.power = 5
// console.log(plus5(5));
// console.log(plus5.power);
// console.log(plus5.prototype);
// console.log(this.num);   // log undefined 


// here we can take reference of above function

// function Plus5(num) {
//     this.num = num;
//     this.result = num + 5;
// }

// // Create instances using the constructor
// const instance1 = new Plus5(10);
// const instance2 = new Plus5(7);

// // Log the results
// console.log(instance1.num);     // Access the 'num' property of instance1
// console.log(instance1.result);  // Access the 'result' property of instance1

// console.log(instance2.num);     // Access the 'num' property of instance2
// console.log(instance2.result);  // Access the 'result' property of instance2

// console.log(Plus5.prototype);


// function CreateUser(userName, score){
//     this.userName = userName
//     this.score = score
// }

// CreateUser.prototype.printScore = function (){
//     return `score of ${this.userName} is ${this.score}`
// }

// CreateUser.prototype.increment = function (){
//     return ++ this.score 
//     // this can be written with post increament like below
//     // this.score ++
//     // return this.score
// }

// const user1 = new CreateUser("anas", 10)
// console.log(user1.increment());
// console.log(user1.printScore());


// const user1 = new CreateUser("anas", 10)
// console.log(user1.increment());
// console.log(user1.printScore());

// this is another method to write this code

// function CreateUser(userName, score) {
//     this.userName = userName;
//     this.score = score;

//     this.printScore = function () {
//         return `score of ${this.userName} is ${this.score}`;
//     };

//     this.increment = function () {
//         return ++this.score;
//     };
// }

// const user1 = new CreateUser("anas", 10);
// console.log(user1.increment());
// console.log(user1.printScore());

// let arr = ["pakistan", "usa", "china"]

// let names = {
//     name1: "usama",
//     name2: "anas",
//     name3: "okasha",
// }

// Object.prototype.name4 = function(name4){
//     return name4
// }

// console.log(names.name4("shaban"));
// console.log(names.name4("bilal"));
// console.log(arr.name4("waseem"));

// Array.prototype.name5 = function(name5){
//     return name5
// }

// console.log(arr.name5("Aijaz"));
// // console.log(names.name5("Aijaz"));  // this will show error because 

// // Inheritance

// let sonName = {
//     sName: "usama"
// }

// let fatherName = {
//     fName: "Aijaz",
//     // __proto__: sonName
// }

// // fatherName.__proto__ = sonName
// // console.log(fatherName.sName);
// // console.log(sonName.fName); // show undefined

// // modren syntex

// Object.setPrototypeOf(fatherName, sonName)
// console.log(fatherName.sName);

// // 
// let city = "karachi     "
// let country = "USA       "

// String.prototype.trueLenght = function(){

//     return `${this}
// true length of ${this.trim().length}`
// }
// console.log(city.trueLenght());
// console.log("usama".trueLenght());