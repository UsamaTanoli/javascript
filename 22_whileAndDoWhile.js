/* *******************While Loop******************** */

/* In JavaScript, a while loop is a control structure that repeatedly executes
 a block of code as long as a specified condition evaluates to true. */



// let num = 20;
// while (num >= 15) {
//     console.log(num);
//     num--
// }

// let num1 = 0;
// while (num1 <= 25) {
//     console.log(num1);
//     num1 = num1 + 5
// }

// let arrOfName = ["bilal", "abbasi", "waseem", "shaban"];
// let index = 0;
// while (index < arrOfName.length) {
//     console.log(`index of ${arrOfName[index]} is ${index}`);
//     index = index + 1
// }

/* 
 In JavaScript, a do...while loop is a control flow structure 
 that allows you to repeatedly execute a block of code while a specified
 condition is true. Unlike a while loop, a do...while loop
 always executes the code block at least once, and then checks the condition for
 further iterations. Here's the basic syntax for a do...while loop: */

// let counter = 0;

// do {
//     console.log(counter);
//     counter++;
// } while (counter <= 10)

let counter = 11; // here condition is not meet but it will print 11 as per above definition

do {
    console.log(counter);
    counter++;
} while (counter <= 10);
