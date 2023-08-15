let name = "anas";
let fName = "aijaz";

console.log(name + fName) // Concatenation  but this is old way to write string

// *******************************Template literals****************************

let gameName = "igi";
let round = 14;

// this is the traditional way to write code.
console.log("project"+" "+gameName+" "+"is pc game and it has"+" "+round+" "+"missions")

// by using Template literals you can increase readability of code 
console.log(`Project ${gameName} is pc game and it has ${round} missions`) //this ${} is called placeholder.

// another way to write string is by new String() string as object.

let myName = new String("mike1234")
console.log(myName)
   