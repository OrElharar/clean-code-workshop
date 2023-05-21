// Drill: Implementing a Factory Function
//
// Instructions:
//
//     Write a factory function that creates objects based on a given template.
//     The factory function should accept parameters to customize the created objects.
//     The created objects should have specific properties and behaviors defined by the template.
//     Test the factory function by creating multiple objects with different parameter values.
//     Code template:

function createObject(parameter1, parameter2) {
    return {
        property1: parameter1,
        property2: parameter2,
        method1() {
            // Method logic using parameter3
        },
        method2() {
            // Method logic using parameter3
        }
    };
}

// Create objects using the factory function
const object1 = createObject('value1', 10, 'abc');
const object2 = createObject('value2', 20, 'def');

// Test the created objects
console.log(object1.property1);
console.log(object1.property2);
object1.method1();
console.log(object2.property1);
console.log(object2.property2);
object2.method2();
