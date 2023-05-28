//Drill 3: Applying the Law of Demeter
//
// Instructions:
//
// Examine a given code snippet involving the Order class that violates the Law of Demeter.
// Identify any instances where the Order object is directly accessing collaborators' data or methods.
// Refactor the code to adhere to the Law of Demeter by reducing direct dependencies and accessing collaborators' data
// or methods through appropriate interfaces or encapsulation.

class EmailService {
    constructor() {}

    sendOrderConfirmation() {
        // Method logic for sending order confirmation email
    }
}


class Customer {
    constructor(name, email, emailService) {
        this.emailService = emailService;
        this.extraData = {
            name,
            email
        };
    }

    getName() {
        return this.extraData.name;
    }

    getEmailService() {
        return this.emailService;
    }
}
class Order {
    constructor(customer) {
        this.verifyData(customer);
        this.customer = customer;
    }


    verifyData(customer) {
        if(customer.data.name == null) {
            throw new Error('Invalid customer data');
        }
    }
    placeOrder() {
        const emailService = this.customer.getEmailService();
        emailService.sendOrderConfirmation(this.customer.extraData.email);
    }

}



