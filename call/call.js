function printName(name){
    this.name = name
    // console.log("hello i am called");
}

function AddUser(name, email, id){
    printName.call(this, name)

    this.email = email
    this.id = id

}

let user1 = new AddUser("usama", "usama@abc.com", "1122")
console.log(user1);

const person = {
    firstName: "John",
    lastName: "Doe"
};

// person.greeting = function(){
//     return ` ${this.firstName} ${this.lastName} how are you`
// }
// console.log(person.greeting())

function greeting(hello){
    return `${hello} ${this.firstName} ${this.lastName} how are you`
}

console.log(greeting.call(person, "hello"))