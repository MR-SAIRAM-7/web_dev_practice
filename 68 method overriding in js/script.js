// read notes and mdn website for introduction

// we use super keyword if we dont want the method of the previous class . we can execute it through parent class using super key word

// super(a,b)---- calls parent constructor
// run(){
// super.run()
// this.hide
// }

// class monkey extends animal{
// auto generated
// constructor(...args){
// super(..args)
// }
// } -- this happens if we dont write our own constructor

class Employee {
    constructor(name) {
        this.name = name
        console.log(`${name} is employee name `)
    }
    login() {
        console.log("Employee has logged in ")
    }
    logout() {
        console.log("Employee has logged out ")
    }
    request_leaves(leaves) {
        console.log(`Employee has requested for ${leaves} leaves - auto approved`)
    }

}

class programmer extends Employee {
    constructor(name) {
        super(name) //---- constructor calls from parent class (employee-class even it is derived from another class)
        console.log("This is new constuctor")
    }

    //constructor(...args) -- if no constructor is made in child class,this is created automatically // super(..args) also...

    request_coffee(x) {
        console.log(`Employee has requested for ${x} coffee`)
    }

    request_leaves(leaves) {
        super.request_leaves(leaves+1)
        console.log("One extra is granted") // -- method is over rided for this class
    }

}

let e = new programmer("harry")
e.login()
e.request_leaves(5)

let f = new Employee("rohan")
f.login()
f.request_leaves(5)