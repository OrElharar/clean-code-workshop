// Drill 1: Redundant Information
//
// Instructions:
//
// You will be provided with a code snippet containing comments that explain what the code is doing.
// Identify the redundant comments that restate the obvious functionality.
// Remove or rephrase the redundant comments to focus on explaining the purpose or rationale behind the code.


const exampleFunction = (array) => {
// Loop through the array and process each element
    for (let i = 0; i < array.length; i++) {
        // Check if the element greater than 10
        if (array[i] > 10) {
            // log the element
            console.log(array[i]);
        }
    }
}
