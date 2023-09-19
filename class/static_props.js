class User {
    constructor(user_name){
        this.user_name = user_name
    }

    logUserName(){
        return `user name is ${this.user_name}`
    }
}

class User2 extends User {
    constructor(user_name, id, password){
        super(user_name)
        this.id = id
        this.password = password
    }

    static createId(){
        const randomNumber = Math.floor(Math.random() * 10000); 
    return `${this.id + randomNumber}`;

    }

}

let dbQuery1 = new User2("usama", "#", "strongPassword")
console.log(dbQuery1);
// console.log(dbQuery1.createId()); // gives error but by removing static above code will run

