// Getters and setters are special methods in JavaScript that allow you to define how to access and modify the properties of an object.

// A getter is a method that gets the value of a specific property. It is defined using the get keyword followed by a function. Getters can be used to access a property in a controlled manner, often providing a way to compute or format the value before returning it.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter method
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('John', 'Doe');
console.log(person.fullName); // Output: John Doe

//   A setter is a method that sets the value of a specific property. It is defined using the set keyword followed by a function. Setters can be used to control how a property is updated, allowing for validation or transformation of the value before storing it.

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Getter method
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    // Setter method
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this._firstName = firstName;
        this._lastName = lastName;
    }
}

const person1 = new Person('John', 'Doe');
person.fullName = 'Jane Smith';
console.log(person1.fullName); // Output: Jane Smith

// The instanceof operator in JavaScript is used to check if an object is an instance of a specific class or constructor function. It returns true if the object is an instance, otherwise it returns false.

// object instanceof Constructor

class Car {}
const myCar = new Car();

console.log(myCar instanceof Car); // Output: true
console.log(myCar instanceof Object); // Output: true
console.log(myCar instanceof Array); // Output: false

