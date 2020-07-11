let val

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