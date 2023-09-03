/* ########################## reduce() ############################## */
/* In JavaScript, the reduce() method is a higher-order array function used to
 iteratively process and accumulate values from an array, applying a provided 
 function to each element to reduce the array to a single value. */

//  difference between map(), filter() and reduce

/* 
Map: It transforms each element of an array and returns a new array of 
the same length, with the modified values.

Filter: It creates a new array by selecting elements from the original 
array that meet a specified condition, resulting in a potentially smaller array.

Reduce: It applies a function to accumulate and reduce all elements of an array into
a single value, such as summing all numbers or finding the maximum value. */


 let arr = [1,2,3,4];

let add = arr.reduce((acc, curr) => {
    console.log(`acc ${acc} value is ${curr}`);
    return acc + curr
}, 0)
console.log(add)

let cars = [
    {
        caraName: "lx 570",
        carPriceIn$: 150000,
    },

    {
        caraName: "civic",
        carPriceIn$: 50000,
    },

    {
        caraName: "tesla",
        carPriceIn$: 120000,
    }
]

let addBucket = cars.reduce((acc, items) => {
    return acc + items.carPriceIn$
},0)

console.log(`your total ammount is`, addBucket, `Doller`);