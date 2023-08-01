                 // let, var and const

// var is used to declare variable that has global scop in javascript
var studentName = "shaban"

//  let is used to declare variable that has block scop in javascript
let studentEmail = "shaban@gmail.com"

// const does not redeclare once you declare "const" = constant
const studentId = 12345;

console.table([studentName, studentEmail, studentId])

// lets change variable values

studentName = "anas";
studentEmail = "anas@gmail.com"


// studentId = 112244 "this will show error because"
 
console.table([studentName, studentEmail, studentId])

// we can assign variable without let var and const but it is bad practice
age = 16;
console.log(age);