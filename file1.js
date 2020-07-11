// Terminal
console.clear()
console.time('lsn')
console.log('Hello world!')
console.log(typeof 1)
console.table({ a: 1, b: 2 })
console.warn('Example warning')
console.error('Example error')
console.timeEnd('lsn')

/*
    - The difference between const and let
    is that let can be reassigned and const cant.
    let can be predefined but const cant
*/
// Variables
const name = 'Emmanuel'
let age = 18

// Arrays
const arr1 = [1, 2, 3, 4, 5]
let arr2 = [5, 4, 3, 2, 1]

// Objects
const obj1 = { a: 1, b: 2 }
let obj2 = { a: 1, b: 2 }

// Type conversion
/* 
    - Property length only works on
    strings and arrays. It will return undefined
    when used on numbers or booleans.
*/
let val
let val1
let val2

// Number to string
val = (555).toString()
val = String(555)
val = String(5 + 5)

// Boolean to a string
val = String(true)

// Date to a string
val = String(new Date())

// Array to string
val = String([1, 2, 3, 4])

// String to numbers
/*
    - When converting to numbers, when
    a value can't be converted to a valid number
    it returns NaN (Not a Number) e.g a string
    made of letters, arrays, objects... etc
    
    - The difference between parseInt() and
    parseFloat() is that parseInt() doesn't return
    floats while the latter does.

    - If you need to round off use toFixed() method
    and parse the number of decimal places you want
    displayed.
*/
val = parseInt('100.30')
val = parseFloat('100.30')
val = val.toFixed(3)
val = Number('5')
val = Number('hello')

// Boolean to number
val = Number(true)
val = Number(false)
val = Number(null)

// Type coercion
/*
    - When adding numbers and strings, JS automatically
    converts one the number in that instance to a string
    and concatenates them.
*/
val1 = String(5)
val2 = 5

// Numbers and math object
val1 = 20
val2 = 10

val = val1 + val2 // addition
val = val1 - val2 // subtraction
val = val1 * val2 // multiplication
val = val1 / val2 // division
val = val1 % val2 // remainder

// Math objects
/*
    - Math.round() will automatically round the 
    number up or down depending on the number 
    afer (.)

    - Math.ceil() will round up no matter the number
    while Math.floor() does the opposite
*/
val = Math.PI
val = Math.round(2.5)
val = Math.ceil(2.5) // round up
val = Math.floor(2.5) // round down
val = Math.sqrt(25) // squareroot
val = Math.abs(-5) // get the absolute umber
val = Math.pow(8, 2) // power
val = Math.min(235, 1, 4, 124, 23, 4, 356) // get the maximum number in the array
val = Math.max(235, 1, 4, 124, 23, 4, 356) // get the minimum number in the array
val = Math.random() // generate a random number


// String methods and concatenation
val1 = 'Emmanuel'
val2 = 'Karanja'

// Concatenation
val = val1 + ' ' + val2
val = `My name is ${val1} ${val2}`
val = val1.concat(' ', val2)

// Appending
val = val1
val += val2

// Escaping
val = 'My name\'s Emmanuel'

// Length
val.length

// Change case
val = val1.toUpperCase()
val = val1.toLowerCase()

// String array
val = val1[0]

/*
    - The difference between indexOf() and
    lastIndexOf() is that the latter starts
    from the end of the instance and returns
    index of the last instance of the passed
    value
*/
// indexOf() - Gets index of charachter passed
val = val1.indexOf('m')
val = val1.lastIndexOf('m')

// charAt() - Geets the character at the index passed
val = val1.charAt('3')
val = val1.charAt(val1.length - 1) // Will always get the last character in a string

/*
    - The difference between substring() and
    slice() is that the latter works with negative
    values and can be used with arrays whilst the
    first wont 
*/
// substring() - Return the ammount of characters defined
val = val1.substring(0, 4)

// slice()
val = val1.slice(-3)

// split() - Turns string to array
val = `${val1} ${val2}`
val = val.split(' ')

// replace()
val = val1.replace('Emmanuel', 'Karanja')

// includes()
val = val1.includes('Emmanuel')

console.log(val)
