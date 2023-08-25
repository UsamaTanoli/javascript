// let you have program for shopping cart

//... rest operator
function shopingCart(v1, v2, ...val1){
    return (val1)
}

console.log(shopingCart(230,232,555,345)); 


// let gethring = shopingCart(1,2,3,4)
// console.log(gethring.splice(1));


const user = {
    uName: "usama",
    num: 1234
}

function folloUser(object1) {
    return `user name is ${object1.uName} and user num is ${object1.num}`;
}

console.log(folloUser(user));
// this can also be write as below

// console.log(folloUser({
//     uName: "usama",
//     num: 1234
// }));

let arr = [2,4,6,8,10]
function returnArray(getArry){
    return getArry[2]
}
console.log(returnArray(arr));