// Arrays and array methods
let val
let values = []
values = new Array(12, 23, 45, 56, 78, 89, 90)
const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Pear']
const numbers = [12, 23, 45, 56, 78, 89, 90]

// Get array length
val = fruits.length

// Check if is array
val = Array.isArray(fruits)

// Get single value
val = fruits[0]

// Replace array value
fruits[1] = 'Carrot'

// Get index of value
val = fruits.indexOf('Banana')

// Mutating arrays
fruits.push('Strawberry') // adds to end of array
fruits.unshift('Pineapple') // adds to end of array
fruits.pop() // remove last value of array
fruits.shift() // remove first value of array
fruits.splice(1, 1) // remove specific value of array
fruits.reverse() // reverse the order
val = fruits.concat(numbers) // concatenate array
val = fruits.sort() // sort strings in alphabetical order
val = numbers.sort((x, y) => x - y) // sort numbers in ascending order
val = numbers.sort((x, y) => y - x) // sort numbers in descending order
val = numbers.find((num) => num > 50) // find a certain category of numbers

console.log(fruits)
console.log(numbers)

// Object literals
const person = {
    name: 'Emmanuel',
    age: 19,
    email: 'emmanuel@me.com',
    role: 'Developer',
    hobbies: ['sports', 'dancing']
}

val = person
val = person.name
val = person['age']
val = person.hobbies
console.log(val)
