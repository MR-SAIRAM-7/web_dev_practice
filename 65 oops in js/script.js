// refer notes and mdn website for Introduction


//prototype
//js objects have a special property called prototype that is either null or references another object

// prototype object
//             ]prototype
//object

// when we try to read a property from a prototype and it is missing js will automatically takes it from prototype
// this phenomena is called prototype - inheritance

// four pillars of oops
//1.abstraction 2.encapsulation 3.inheritance 4.polymorphism

//setting prototype
// we set prototype by using __proto__

let a = {
    name2 : "harry",
    lang : "javascript",
    run : ()=>{
        alert("self run")
    }
}
console.log(a)
// console.log(a.run())

let p = {
    run : ()=>{
        alert("run")
    }
}

p.__proto__ = {
    name : "jackie"
}

// a.__proto__=p
// a.run()
// console.log(a.name)

//classes and objects
// refer notes and mdn for introduction------------

// class my_class{
//     // class methods
//     constructor(){}
//     method1(){}
//     method2(){}

// }

class railway_form{
    fill(given_name){
        this.name = given_name
    }
    submit(){
        alert(this.name + " form submitted")
    }
    cancel(){
        alert(this.name + " form cancelled")
    }
}

let harry_form = new railway_form()
harry_form.fill("Harry")
let rohan_form = new railway_form()
rohan_form.fill("rohan")
harry_form.submit()
rohan_form.cancel()
rohan_form.submit()