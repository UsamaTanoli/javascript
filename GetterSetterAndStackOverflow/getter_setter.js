// class User {
//     constructor(name, email){
//         this.email = email
//         this.name = name
//     }
//     get name(){
//         return this._name.toUpperCase()
//     }

//     set name(name){
//         this._name = name
//     }

//     get email(){
//         return this._email.toLowerCase()
//     }

//     set email(value){
//         this._email = value
//     }
// }

// let userCall = new User("usama", "usama@GoOGle.com")
// console.log(userCall);
// console.log(userCall.name);
// console.log(userCall.email);

// get or set via defineProperty

// function User1(name, email){
//     this.name = name
//     this.email = email

//     Object.defineProperty(this, name, {
//         get: function(){
//             return this._name
//         },
//         set: function(value){
//             this._name = value
//         }
//     })

//     Object.defineProperty(this, email, {
//         get: function(){
//             return this._email
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
// }

// let userCall1 = new User1("anas", "anas@gmail.com")
// console.log(userCall1);
// console.log(userCall1.name);
// console.log(userCall1.email);

// get or set via Objects

let userObj = {
    _name: "usama",
    _email: "usama@gmail.com",

    get email(){
       return this._email
    },
    set email(value){
        this._email = value
    }
}

let userCall2 = Object.create(userObj)
console.log(userCall2.email);