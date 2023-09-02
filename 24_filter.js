/* ######################### filter() ########################### */
 /* In JavaScript, you can use the filter() method to create a new array containing
  elements from an existing array that meet a certain condition. 
  The filter() method iterates through each element in the array and applies a 
  provided function to determine whether the element should be included in the new array. */

let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.filter((items) => {
//     console.log(items);
// })

// difference b/w filter and ForEach
/* filter() creates a new array with elements that meet a specified condition, 
while forEach() iterates over array elements for side effects without creating a new array. */

// let gratorThen5 =  arr.filter((items) => {
//     return items > 5
// })
// console.log(gratorThen5);

// let gratorThen6 =  arr.forEach((items) => {
//     return items > 6
// })
// console.log(gratorThen6); // undefined because it does no return

// but here is a method for return of for each

// let arr1 = [];

// let pushToArr = arr.forEach((items) =>{
//     if(items > 5){
//         return arr1.push(items)
//     }
// })
// console.log(arr1);

// filter Exercise

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


 /* filter books on the basis of Genre */

//  books.forEach((gen) => {
//     console.log(gen.genre); 
//   })
 

const words = [
  'Fiction',
  'Non-Fiction',
  'History',
  'Non-Fiction',
  'Science',
  'Fiction',
  'History',
  'Science',
  'Non-Fiction',
];

// Create an empty array to store unique words
const uniqueWords = [];

// Iterate through the original list of words
for (const word of words) {
  // Check if the word is not already in the uniqueWords array
  if (!uniqueWords.includes(word)) {
    // If it's not in the array, add it to the uniqueWords array
    uniqueWords.push(word);
  }
}

console.log(uniqueWords);


        // Science Books
let scienceBook = books.filter((bk)=> bk.genre === "Science")
// console.log(scienceBook);

 
      // History Books
let historyBooks = books.filter((bk) => bk.genre === "History")
// console.log(historyBooks);

 
            // Non-Fiction Books
let nonFioctionBooks = books.filter((bk) => {
    return bk.genre === "Non-Fiction"
})
// console.log(nonFioctionBooks);


       // Fiction Books
let fictionBooks = books.filter((bk) => bk.genre === "Fiction")
console.log(fictionBooks);

      // some onther experiments with above list object

let historyBook1986Onword = books.filter((bk) => {
    return (bk.genre === "History" && bk.publish >= 1999)
})
// console.log(historyBook1986Onword);


     // Latest publish 

let latestPublish =  books.filter((bk) => {
    return (bk.publish > 2005)
})     
console.log(latestPublish);