// IF and Else

// if(true){
//     console.log("code will execute inside condition");    
// }
// if(false){
//     console.log("code will not execute inside condition");    
// }
// console.log("okasha");

//comperisson Operators
/*  ==	equal to
    ===	equal value and equal type
    !=	not equal
    !==	not equal value or not equal type
    >	greater than
    <	less than
    >=	greater than or equal to
    <=	less than or equal to


*/

// let isLoggedIn = true;
// let hungerlevel = 4
// if (hungerlevel >= 5 && isLoggedIn == true){
//     console.log("you can order meal");
// }else{
//     console.log("you can't order meal");
// }

// let score = 55;
// if (score >= 55) {
//     let openMap = "vice beach"
//     console.log(`your score is ${score} or greater and ${openMap} map is opend`);
// }
/*console.log(`your score is ${score} or greater and ${openMap} map is opend`);*/ /* this will
 not run because of scope */

// we can write if statement like below
// let name = "usama"
// if (name === "usama") console.log("correct name"); // not suggested method.

// let value = 500;
// if(value < 200){
//     console.log("less then givenss value");
// }
// else if(value < 400){
//     console.log("less then given value");
// }
// else if(value >= 500){
//     console.log("this is correct statemant");
// }

// multiple statement
// const user = "usama"
// const hasUserAccount = true;
// const isSubscriptionFulFil = true;

// if (hasUserAccount === true && isSubscriptionFulFil === true) {
//     console.log(`${user} you can watch videos`);
// }

// const student = "shaban";
// const hasIdCard = true
// const hasUniCard = false;

// if(hasIdCard === true || hasUniCard === false){
//     console.log(`${student} you can sit in exam`);
// }
// else if(hasIdCard === true && hasUniCard === true){
//     console.log(`${student} sorry, you can't sit in exam`)
// }
// if (hasIdCard === true || hasUniCard === true) {
//     console.log(`${student}, you can sit in the exam.`);
// }
// else {
//     console.log(`${student}, sorry, you can't sit in the exam.`);
// }

/***************************************************************/
// switch statement its syntex is given below

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// let month = 2;
// switch (month) {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");    
//         break;

//     default:
//         console.log("log the correct value");
//         break;
// }

// let monthByName = "march"

// switch (monthByName) {
//     case "january":
//         console.log("first month");
//         break;
//     case "feb":
//         console.log("second month");
//         break;
//     case "march":
//         console.log("third month");
//         break;

//     default:
//         console.log("just january,feb and march are available");
//         break;
// }

/* ********************************************************************************** */
/* TRUTHY AND FALSY */

// Falsy values 
// false , 0, -0, (BigInt 0n), undefined, null, "", NaN

// Truthy values
/*"every value include 0, false etc in string", " ", [], {}, function()*/

// let studentName = "anas"
// if(studentName){
//     console.log("you have name")
// }
// else{
//     console.log("don't have name");
// }
// let studentName = " "; // this will run if statement because "spaces"

// if(studentName){
//     console.log("you have name")
// }
// else{
//     console.log("don't have name");
// }

// let studentName = [] // will run if statement
// if(studentName){
//     console.log("you have name")
// }
// else{
//     console.log("don't have name");
// }

// let emptyObj = {};
// if(emptyObj){
//     console.log("empty object");
// }

// if(Object.keys(emptyObj).length === 0){
//     console.log("empty object");
// }
// else{
//     console.log("do not have empty object");
// }

// Nullish Coalescing Operator (??); for null and undefiend;

let value1 = 12 ?? 30;
console.log(value1);
value1 = null ?? 20;
console.log(value1);
value1 = undefined ?? 20;
console.log(value1);
value1 = null ?? "usama";
console.log(value1);
value1 = null ?? 23 ?? 23; // it will take first value


let num = 34;
num >= 35 ? console.log("number is greator") : console.log("number is lesser");

let name1 = "usama Aijaz";
// name = "anas" // this will print wrong name
name1 == "usama Aijaz" ? console.log("right name") : console.log("wrong name"); ;