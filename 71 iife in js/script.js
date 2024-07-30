// An Immediately Invoked Function Expression (IIFE) is a design pattern in JavaScript that involves creating and executing a function immediately after it is defined. The purpose of an IIFE is to create a new scope and avoid polluting the global namespace with variables that are only needed temporarily.

// (function() {
//     // Code here runs immediately
//   })();

// (() => {
//     // Code here runs immediately
//   })();

(function () {
    const message = 'Hello, World!';
    console.log(message);
}
)();


const myModule = (function () {
    const privateVar = 'I am private';

    function privateMethod() {
        console.log(privateVar);
    }

    return {
        publicMethod: function () {
            privateMethod();
        }
    };
})();

myModule.publicMethod(); // Output: I am private

