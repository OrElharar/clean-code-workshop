//Drill 2: Refactoring Function Names
//
// Instructions:
//
// You will be provided with a piece of code containing functions with poorly chosen names.
// Your task is to refactor the code by giving meaningful and descriptive names to the functions.
// Follow the 1-naming conventions and best practices discussed in the workshop.
// Consider the context of the code to ensure the names accurately reflect the purpose of the functions.
// Refactor the code in the provided code editor and submit your improved version.

function a(x, y) {
    return x + y;
}

function b(f) {
    const g = f * f;
    return g;
}

const result1 = a(5, 10);
console.log(result1);

const result2 = b(6);
console.log(result2);


const prime = (n) => {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }

    return true;
}

console.log(prime(result2))
