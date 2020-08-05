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

    getsMarried(newLastName) {
        this.lastName = newLastName
    }

    static addNumbers(n1, n2) {
        return n1 + n2
    }
}

const sue = new Person('Susan', 'Kabochi', '8-7-1999')
console.log(sue)
console.log(sue.greetings())
console.log(sue.getAge())
sue.getsMarried('Mystery')
console.log(sue.getFullName())

/*
    - Static methods can be used without instantiating an
    object
*/
// console.log(sue.addNumbers(1,2)) // throws an error
console.log(Person.addNumbers(2, 3))