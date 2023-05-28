const isEmailValid = (input) => {
    //  this regular expression is build by the following rules:
    // 1. ^[a-zA-Z0-9]+ - this part checks that the string starts with at least one letter or number
    // 2. @[a-zA-Z0-9]+ - this part checks that the string contains an @ symbol and at least one letter or number after it
    // 3. \.[a-zA-Z0-9]+$ - this part checks that the string ends with at least one letter or number after a dot

   const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    return emailPattern.test(input);
}

console.log(isEmailValid(""));
console.log(isEmailValid("o@g.com"));
console.log(isEmailValid("o@g@c.com"));
console.log(isEmailValid("t@gmail.co"));

