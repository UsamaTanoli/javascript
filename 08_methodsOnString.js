// charAt(): method returns the character at the specified index in a string.

let myName = "usama";
let indexNum = myName.charAt(1) // eg 0,1,2 etc
console.log(indexNum)

// concat(): method concatenates given arguments to the given string.

let pName = "shaban"
let space = " "
let fName = "israr"
let fullName = pName.concat(space,fName)
console.log(fullName);

// The endsWith() method returns true if a string ends with the specified string. If not, the method returns false

let color = "my fav color is green"
let check = color.endsWith("green")
console.log(check);
let check1 = color.endsWith("is") //false 
console.log(check1);
//we can check langth of string by endsWith() by giving length parameter
let check2 = color.endsWith("color",12)
console.log("color "+ check2);

// The includes() method checks if one string can be found inside another string.

let str = "i love javascript"
let find = str.includes("love")
console.log(find)
let find1 = str.includes("love",2) // true
console.log(find1);
let find2 = str.includes("love",4) // false
console.log(find2);

// indexOf():  method returns the index of the first occurence of the substring in a string.

let fav = "my favourite game is ufc";
let inOf = fav.indexOf("afw")
console.log(inOf)
let inOf1 = fav.indexOf("a")
console.log(inOf1);
let inOf2 = fav.indexOf("a",5)
console.log(inOf2)


// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
// syntex slice(indexStart)
//slice(indexStart, indexEnd) 


let sliString = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, alias!"
let nstring = sliString.slice(22)
console.log(nstring);
let nstring1 = sliString.slice(2, 5)
console.log(nstring1)
let nstring2 = sliString.slice(2, -5)
console.log(nstring2)

