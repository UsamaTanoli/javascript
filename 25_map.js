/* ####################### Map ############################ */

/* In JavaScript, the map() method is used to create a new array by applying a provided
function to every element in an existing array. It doesn't modify the original array but 
instead returns a new array with the results of applying the provided function to each element.
 The resulting array will have the same length as the original array. */

/* `map()` transforms each element of an array and returns a new array with the same length,
 while `filter()` returns a new array with elements that satisfy a condition based on a provided
 function. */

let numbers = [1,2,3,4,5,6,7,8,9,10]

// let xBy10 = numbers.map((items) => {
//     return items * 10
// })

// console.log(xBy10)

// let addTwo = xBy10.map((items) => {
//     return items +2
// })
// console.log(addTwo);

// we can also perform multiple maps in one step 

// let newNum = numbers.map((items) => {
//     return items * 10 
// }).map((items) => {
//     return items + 2
// })
// console.log(newNum);

// here we can use filter on map

let filterOnMap = numbers.map((items) => {
    return items * 10 
}).map((items) => {
    return items + 2
}).filter((items) => {
    return items >= 30
})
console.log(filterOnMap);

