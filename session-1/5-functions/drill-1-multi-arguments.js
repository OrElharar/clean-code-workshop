class User {
  constructor(userData) {
    User.verifyUserData(userData);
    const {firstName, lastName, email, age, isMale} = userData
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.age = age
    this.isMale = isMale
  }

  static isEmailValid(email) {
    //   this regular expression is build by the following rules:
    //   1. the string must start with at least one letter or number
    //   2. Next the string must contain an @ symbol
    //   3. the string must contain at least one letter or number after the @ symbol

    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/
    return emailPattern.test(email)
  }

  static isAgeValid(age) {
    return  typeof age === "number" && age >= 0 && age <= 120
  }
  static isFirstNameValid(name) {
      if(typeof name !== 'string')
          return false;
      return name.length > 0
  }
  static isLastNameValid(name) {
      return User.isFirstNameValid(name);
  }
  static verifyUserData({firstName, lastName, email, age}) {
        if(!User.isFirstNameValid(firstName))
            throw new Error('Invalid first name');
        if(!User.isLastNameValid(lastName))
            throw new Error('Invalid last name');
        if(!User.isEmailValid(email))
            throw new Error('Invalid email');
        if(!User.isAgeValid(age))
            throw new Error('Invalid age');

  }

  static verifyUserDataComplexFunction(firstName, lastName, email, age) {

    if(typeof firstName !== 'string' || firstName.length === 0)
        throw new Error('Invalid first name');
    if(typeof lastName !== 'string' || lastName.length === 0)
        throw new Error('Invalid last name');
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/
    if(emailPattern.test(email) === false)
        throw new Error('Invalid email');
    if(typeof age !== 'number' || !(age >= 0 && age <= 120))
        throw new Error('Invalid age');

  }
}


module.exports = {User}
