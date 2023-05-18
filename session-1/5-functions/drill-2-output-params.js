const {User} = require('./drill-1-multi-arguments.js');

class FlexUser extends User{
    constructor(userData) {
        super(userData);
    }

    putFirstName(firstName) {
        if(!User.isFirstNameValid(firstName))
            throw new Error('Invalid first name');
        this.firstName = firstName;
    }

    overrideEmail(email) {
        if(!User.isEmailValid(email))
            throw new Error('Invalid email');
        this.email = email;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
