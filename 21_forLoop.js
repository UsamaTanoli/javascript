// For Loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log("this is",element);
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("here comes 5");
//     }
//     console.log("this is",element);
// }

// for (let i = 1; i <=5 ; i++) {
//       console.log(`
//     "${i}" table start`);
//     for (let j = 1; j <= 10; j++) {
        
//         console.log(`${i} × ${j} = ${i*j}`);
        
        
//     };
    
// }

// let arr = ["cat", "dog", "lion"];

// for (let i = 0; i < arr.length; i++){
//     let e = e[i];
//     console.log(e);
// }

// this can also be weite like this
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

// let nameArr = ["anas", "shaban", "usama", "okasha", "bilal"];

/*
         Break Statement:

The break statement is used to exit a loop prematurely,
 typically when a certain condition is met. It allows you to terminate 
 the loop's execution immediately. */

// for (let i = 0; i < nameArr.length; i++){
//     if(nameArr[i] === "usama"){
//         console.log(`"${nameArr[i]}" the lion detected on index ${i} so please abbort mission`);
//         break
//     }
//     console.log(nameArr[i]);
// }

    /*
         Continue Statement
    The continue statement is used to skip the current iteration of a loop 
    and move to the next iteration. It's typically used when you want to 
    skip a specific iteration based on a condition but continue with the remaining iterations.*/

// for (let i = 0; i < nameArr.length; i++){
//     if(nameArr[i] === "usama"){
//         console.log(`"${nameArr[i]}" the lion detected on index ${i} so please abbort mission`);
//         continue
//     }
//     console.log(nameArr[i]);
// }