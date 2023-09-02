/* ########################## For Of ############################ */

/* The for...of loop is a JavaScript iteration statement introduced in ECMAScript 2015 (ES6)
 that allows you to iterate over the values of iterable objects
  such as arrays, strings, maps, sets, and more. It provides a more concise and readable
   way to loop through the elements of an iterable compared to traditional for loops. */

// syntex:
// for (const element of iterable) {
//     // Code to be executed for each element in the iterable
//   }

// let color = ["red", "pink", "blue", "green"];

// for (const items of color){
//     console.log((items));
// }

// let personName = "Usama Aijaz";
// for (const items of personName) {
   
//     console.log(items);
// }

// we can remove space between string with for of loop

// let personName1 = "Usama Aijaz";
// for (const items of personName1) {
//     if (items === " ") {
//         continue
//     }
//     console.log(items);
// }

// The Map object holds key-value pairs and remembers the original insertion order of the keys.

const map = new Map();
map.set('uno', "united nation organization");
map.set('who', "world health organization");
map.set('uk', "united kingdom")


// console.log(map); check by uncomment this

// for (const key of map){
//     console.log(key);
// }  // but this will give array of each key and values

// for (const [key,value] of map){
//     console.log(key, ":-", value);
// }

let obj = {
    uno: "united nation organization",
    who: "world health organization",
    uk: "united kingdom"
}

// for (const key of obj) {    // this will through error of obj is not iterable
//     console.log(key);
// }

// for (const [key,values] of obj) {    // this will also through error of obj is not iterable
//     console.log(key);
// }

// so we use for in loop for objects 

/* ######################## For In ########################## */

/* The for...in loop in JavaScript is an iteration statement used to iterate over the properties (enumerable keys) of an object. It is primarily designed for iterating over the keys of objects, such as the properties of an object or the indices of an array. However, it is important to note that it's generally not recommended to use for...in to loop over arrays, as it can have unexpected behavior if you're not careful. */

// for (const keys in obj) {
//     // console.log(obj[keys]);
//     //this can also be written like below
//     console.log(`"${keys}" is short form of "${obj[keys]}"`);
// }

let arr = ["red", "green", "yello", "blue"];

// for (const key in arr){
//     console.log(key);
// }

// for (const key in arr){
//     console.log(arr[key]);
// }

/* ################################ For Each ############################## */
/* In JavaScript, the forEach() method is a convenient way to iterate over 
the elements of an array. It allows you to apply a function to each element 
in the array without having to manually manage the loop counter. */

let countries = ["pakkistan", "russa", "turky", "china"];

// countries.forEach(function (item,key,arr){
//     console.log(item,key,arr);
// })

// countries.forEach((item, key, array) => {
//     console.log(item, key, array);
// })

let arrayOfObj =[
    {
        name: "usama",
        car: "swift"
    },
    {
        name: "anas",
        car: "mehran",
    },
    {
        name: "Shaban",
        car: "civic"
    }

]

// arrayOfObj.forEach( (items) => {
//         console.log(items.name);
// } )

let abstractItems = (items) => {
    console.log(items.name);
}

arrayOfObj.forEach(abstractItems)