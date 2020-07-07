// Terminal
console.clear()
console.time('lsn')
console.log('Hello world!')
console.log(typeof 1)
console.table({ a: 1, b: 2 })
console.warn('Example warning')
console.error('Example error')
console.timeEnd('lsn')

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
const val1 = String(5)
const val2 = 5