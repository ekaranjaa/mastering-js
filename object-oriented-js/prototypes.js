function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

Person.prototype.getAge = function () {
    const diff = Date.now() - this.dob.getTime()
    const age = new Date(diff)

    return Math.abs(age.getUTCFullYear() - 1970)
}

Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName
}

const emmanuel = new Person('Emmanuel', 'Karanja', '6-30-2001')
const darren = new Person('Darren', 'Kiragu', 'March 3 2018')
const wendy = new Person('Wendy', 'Murithi', '30/12/2001')

console.log(darren)
console.log(darren.getFullName())
console.log(darren.getAge())

wendy.getsMarried('mysterey')
console.log(wendy.getFullName())

// Check for properties
/*
    - If a property is defined as a prototype the property check will return
    false as opposed to when defined inside the object which will return true.
*/
console.log(wendy.hasOwnProperty('firstName'))
console.log(wendy.hasOwnProperty('getsMarried'))
