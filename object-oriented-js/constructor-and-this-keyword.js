// Constructors
// Person constructor
function Person(name, dob) {
    this.name = name
    this.dob = new Date(dob)
    this.calculateAge = () => {
        const diff = Date.now() - this.dob.getTime()
        const age = new Date(diff)

        return Math.abs(age.getUTCFullYear() - 1970)
    }
}

const emmanuel = new Person('Emmanuel', '6-30-2001')
console.log(emmanuel)
console.log(emmanuel.calculateAge())


// Built in constructors
/*
    - Not all built in constructors are advisable to use
    since it may slow down execution speed, it's more code
    and error prone.

    - The use cases are also very minimal
*/
// String
const name = 'Keka'
const name2 = new String('Keka')

console.log(typeof name)
console.log(typeof name2)

// Number
const number = 5
const number2 = new Number(5)

console.log(typeof number)
console.log(typeof number2)

// Boolean
const bool = true
const bool2 = new Boolean(true)

console.log(typeof bool)
console.log(typeof bool2)

// Function
function getSum(n1, n2) { return n1 + n2 }
const getSum2 = new Function('n1', 'n2', 'return n1 + n2')

console.log(getSum(1, 2))
console.log(getSum2(2, 2))

// Regular expressions
const regex = /\w+/
const regex2 = new RegExp('\\w+')

console.log(regex)
console.log(regex2)


// `this` keyword
/*
    - `this` keyword returns the window object when
    used in the global scope
*/
console.log(this)
