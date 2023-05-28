//Drill 4: Refactoring Constants
//
// Instructions:
//
// You will be provided with a piece of code containing constants with poorly chosen names.
// Your task is to refactor the code by giving meaningful and descriptive names to the constants.
// Follow the 1-naming conventions and best practices discussed in the workshop.
// Consider the context of the code to ensure the names accurately reflect their purpose.
// Refactor the code in the provided code editor and submit your improved version.

function getCalculatedCircleArea(radius) {
    // This function using the formula for calculating the area of a circle.
    // area = PI * radius * radius
    return Math.PI * radius * radius;
}

const a = 10;

const c = getCalculatedCircleArea(a);
console.log(c);
