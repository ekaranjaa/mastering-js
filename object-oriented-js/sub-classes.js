class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    greetings() {
        return `Hello ${this.firstName} ${this.lastName}`
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getAge() {
        const diff = Date.now() - this.dob.getTime()
        const age = new Date(diff)

        return Math.abs(age.getUTCFullYear() - 1970)
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        /*
            - In es6 classes we use super to inherit parent class
            properties as opposed to the `call` function in prototypal
            inheritance.
        */
        super(firstName, lastName)

        this.phone = phone
        this.membership = membership
    }

    static getMembershipCost() {
        return 500
    }
}

const customer1 = new Customer('Debby', 'Kush', '0712345678', 'standard')
console.log(customer1)
console.log(customer1.greetings())
console.log(Customer.getMembershipCost())
