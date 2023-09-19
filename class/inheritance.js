class User {
    constructor(userName){
        this.userName = userName
        
    }

    logTheName(){
        return `${this.userName}`
    }
}

class User2 extends User {
    constructor(userName, id, password){
        super(userName)
        this.id = id 
        this.password = password
    }
    canWork(){
        return `${this.userName} can work as a DevOps engineer`
    }
}

let queri1 = new User2("usama", "002", "mypassword")
console.log(queri1);
console.log(queri1.userName);
console.log(queri1.canWork());

let query2 = new User('anas')
// console.log(query2.canWork()); // this will show TypeError: query2.canWork is not a function because we did not extend User2 in User we extend User in User2.
console.log(query2.logTheName());
console.log(queri1 === query2); // false
console.log(query2 instanceof User2); // false
console.log(query2 instanceof User); // true
console.log(queri1 instanceof User2); // true