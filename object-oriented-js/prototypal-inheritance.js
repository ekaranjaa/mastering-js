function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.greetings = function () {
    return `Hello ${this.firstName} ${this.lastName}`
}

const emmanuel = new Person('Emmanuel', 'Karanja')
console.log(emmanuel.greetings())

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName)
    this.phone = phone
    this.membership = membership
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype)

const customer1 = new Customer('Phyl', 'Kim', '0712345678', 'premium')
console.log(customer1)

// Overwriting the greetings prototype
Person.prototype.greetings = function () {
    return `Hello ${this.firstName} ${this.lastName} welcome to our company`
}
console.log(customer1.greetings())
