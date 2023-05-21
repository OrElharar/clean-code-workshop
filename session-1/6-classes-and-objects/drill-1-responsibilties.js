// Drill 1: Analyzing Class Responsibility
//
// Instructions:
//
//     Review the implementation of a class called User.
//     Examine the methods and properties within the User class.
// Identify the responsibilities or purposes of the class based on its methods and properties.
//     Determine if the User class has too many responsibilities by evaluating the cohesion level and the clarity of its purpose.
//     If the class appears to have multiple responsibilities,
//     suggest potential ways to refactor or divide the class to improve clarity and maintainability.



class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        // Method logic for user login
    }

    logout() {
        // Method logic for user logout
    }

    resetPassword() {
        // Method logic for resetting user password
    }

    sendEmail() {
        // Method logic for sending an email to the user
    }
}

