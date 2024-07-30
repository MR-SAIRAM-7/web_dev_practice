// static method are used to implement functions that belong to a class as a whole and not to any particular object

// class ClassName {
//     static methodName() {
//         // Method logic
//     }
// }

class MathUtilities {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) {
            return 'Division by zero is not allowed.';
        }
        return a / b;
    }
}

// Calling static methods on the class itself
console.log(MathUtilities.add(10, 5));       // Output: 15
console.log(MathUtilities.subtract(10, 5));  // Output: 5
console.log(MathUtilities.multiply(10, 5));  // Output: 50
console.log(MathUtilities.divide(10, 5));    // Output: 2
console.log(MathUtilities.divide(10, 0));    // Output: Division by zero is not allowed.

// No this Context: Static methods cannot access instance properties or methods because they are not called on an instance of the class. They do not have access to this.

// Called on Class, Not Instance: Static methods are called on the class itself. For example, MathUtilities.add(10, 5) calls the static method add.
