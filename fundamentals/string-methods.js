let val
let val1
let val2

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
