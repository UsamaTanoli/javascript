// let arr = [1,2,3,4,5,6];
// console.log(arr)
// let arr1 = new Array(1,2,3,4,5)
// console.log(arr1);
// console.log(arr.length); // tells length of array
// console.log(arr.pop()); 
// console.log(arr)

// let arr2 = ["orrange","yello", "pink"]
// arr2[1] = "red"
// console.log(arr2)
// console.log(Object.keys(arr2));
// console.log(arr2);

// let fruit = ["mango", "banana", "apple"]

// Array.pop() removes the last element from an array and returns that element in string.
// let poped = fruit.pop()
// console.log(fruit);
// console.log(poped);

// Array.shift() removes the first element from an array and returns that removed element

// let shifed = fruit.shift()
// console.log(fruit);
// console.log(shifed)

// Array.push() adds the specified elements to the end of an array and returns 
// the new length of the array.
// let pushed = fruit.push("orange");
// console.log(fruit);
// console.log(pushed);

// Array.unshift() adds the specified elements to the beginning of an array and 
// returns the new length of the array.

// let unshifed = fruit.unshift("keno")
// console.log(fruit);
// console.log(unshifed)

// Array.slice  returns a shallow copy of a portion of an array into a new array object selected  from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

let nameList = ["oka", "ana", "sha", "osam","abub"]
// let scliName1 = nameList.slice(1, 3)
// console.log(ScliName);
// console.log(nameList);

// Array.splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// let spliName = nameList.splice(1)
// console.log(spliName);
// console.log(nameList);

let nameList1 = ["adam", "jack", "mark", "robert"]
let spliName1 = nameList1.splice(2,0, "john")
console.log(nameList1);
console.log(spliName1);