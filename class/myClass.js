// class User {
//     constructor(uName, id, password){
//         this.uName = uName
//         this.id = id 
//         this.password = password
//     }
//     encryptPass(){
//         return `${this.password}xyz`
//     }
//     userNameInUpperCase(){
//         return `${this.uName.toUpperCase()}`
//     }
// }
// let user1 = new User("abubakar", "001", "mypasswors_")
// console.log(user1);
// console.log(user1.encryptPass());
// console.log(user1.uName);
// console.log(user1.userNameInUpperCase());

// this can be done by prototype

// function User(uName, id, password) {
//     this.uName = uName
//     this.id = id
//     this.password = password
// }

// User.prototype.encryptPass = function () {
//     return `${this.password}abc`
// }

// User.prototype.userNameInUpperCase = function () {
//     return `${this.uName.toUpperCase()}`
// }

// let user2 = new User("okasha", "001", "mypasswors_")
// console.log(user2);
// console.log(user2.encryptPass());
// console.log(user2.userNameInUpperCase());

