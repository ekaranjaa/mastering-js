let val
let val1
let val2

// Type conversion
/* 
    - Property length only works on
    strings and arrays. It will return undefined
    when used on numbers or booleans.
*/
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
    converts one of the number in that instance to a string
    and concatenates them.
*/
val1 = String(5)
val2 = 5

val = val1 + val2

console.log(val)