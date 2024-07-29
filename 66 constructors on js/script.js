// the constructor() method is called automatically by new,so we can initiate the object there

class railway_form {
    constructor(givenName, trainNo, address) {
        console.log("caonstructor called ...." + givenName + " " + trainNo)
        this.name = givenName
        this.trainNo = trainNo
        this.address = address
    }
    preview() {
        alert(this.name + " " + "your train no. is : " + this.trainNo + " " + this.address)
    }
    submit() {
        alert(this.name + " " + "your form is submitted with for train no.: " + this.trainNo + " " + this.address)
    }
    cancel() {
        alert(this.name + " " + "your form is cancelled with for train no.: " + this.trainNo + " " + this.address)
    }
}

let harry_form = new railway_form("harry", 369, "pacific ocean on mars")
harry_form.preview()
harry_form.submit()
harry_form.cancel()
harry_form.preview()
