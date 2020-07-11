let val
let val1
let val2

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

console.log(val)
