// read notes and mdn website for introduction--------


//the extends key word
//extends keyword is used to extend another class
//class child extends parent
// example program

class animal {
    constructor (name,color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + " is running")
    }
    shout(){
        console.log(this.name + " is shouting")
    }
}

class monkey extends animal{
    eatBanana(){
        console.log(this.name+" is eating banana")
    }
    hide(){
        console.log(this.name + " is hiding")
    }
}

let ani = new animal("bruno","white")
let ani1 = new monkey("chimpu","orange")
ani.run()
ani1.run()
ani.shout()
ani1.eatBanana()
ani1.hide()
// ani.hide() -- error