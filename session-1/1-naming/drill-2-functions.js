//Drill 2: Refactoring Function Names
//
// Instructions:
//
// You will be provided with a piece of code containing functions with poorly chosen names.
// Your task is to refactor the code by giving meaningful and descriptive names to the functions.
// Follow the 1-naming conventions and best practices discussed in the workshop.
// Consider the context of the code to ensure the names accurately reflect the purpose of the functions.
// Refactor the code in the provided code editor and submit your improved version.

function sum(num1, num2) {
    return num1 + num2;
}

function getSquareOfNum(num) {
    return num * num;
}

const result1 = sum(5, 10);
console.log(result1);

const result2 = getSquareOfNum(6);
console.log(result2);


const isPrim = (num) => {
    if (num === 1) {
        return false;
    }

    for (let factor = 2; factor <= Math.sqrt(num); factor++) {
        const isDividedByFactor = num % factor === 0;
        if (isDividedByFactor)
            return false;
    }

    return true;
}

console.log(isPrim(result2))
