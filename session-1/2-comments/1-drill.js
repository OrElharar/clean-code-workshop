// Drill 1: Redundant Information
//
// Instructions:
//
// You will be provided with a code snippet containing comments that explain what the code is doing.
// Identify the redundant comments that restate the obvious functionality.
// Remove or rephrase the redundant comments to focus on explaining the purpose or rationale behind the code.


const printGreaterThenThreshold = (array) => {
    for (let i = 0; i < array.length; i++) {
        const threshold = 10;
        const element  = array[i];
        if (element > threshold) {
            console.log(element);
        }
    }
}
