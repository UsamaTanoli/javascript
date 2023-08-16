let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let createdDate = new Date(2023, 1, 23)
// let createdDate = new Date(2023, 1, 23, 13, 44)
// let createdDate = new Date("12-22-2023") //mm-dd-yyyy
// let createdDate = new Date("2023-12-22") //yyyy-mm-dd
// console.log(createdDate.toLocaleString())

let time = new Date()
console.log(time.getTime());
console.log(time.getSeconds());
console.log(Math.floor(time.getTime()/1000));
console.log(time.getDay() +1);// +1 as we know value of days start from 0-6 in js

console.log(time.toLocaleString('default',{
    weekday: 'short'
}))