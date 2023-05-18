// Drill 2: Dividers
//
// Instructions:
//
//     You will be provided with a code snippet containing a divider comment.
//     Determine if the presence of the divider comment indicates a need for file separation.
//     If the divider comment suggests file separation,
//     propose an appropriate approach to splitting the code into separate files.

// //////////////////////////// UTILITIES //////////////////////////////

// Utility function 1
function isEmailValid(a) {
    a.includes('@')
}

// Utility function 2
function isGreaterThenZero(a) {
    return a > 0;
}

// //////////////////////////// END OF UTILITIES ///////////////////////


const a = 10;
const b = -5;

console.log(isGreaterThenZero(a));
console.log(isGreaterThenZero(b));

const input1 = "test@gmail.com";
const input2 = "t.gmail.com";

console.log(isEmailValid(input1));
console.log(isEmailValid(input2));
