const isEmailValid = (input) => {
    //  this regular expression is build by the following rules:
    //  1. the string must start with at least one letter or number
    //  2. Next the string must contain an @ symbol
    //  3. the string must contain at least one letter or number after the @ symbol

   const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    return emailPattern.test(input);
}

console.log(isEmailValid(""));
console.log(isEmailValid("o@g.com"));
console.log(isEmailValid("o@g@c.com"));
console.log(isEmailValid("t@gmail.co"));

