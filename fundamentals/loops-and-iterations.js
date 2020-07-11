// Loops and iterations
/*
    - Ten is not included since it is not less (< 10)
    To solve that we would have to declare it as (<= 10)

    - To skip an iteration use the continue keyword after
    your condition. Similarly, to break out of a loop use
    the break keyword.
*/
// For loop
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log('Number 3 is my favourite number')
        continue
    }

    if (i === 5) {
        console.log('Break the loop')
        break
    }

    console.log(`Number ${i}`)
}

// While loop
let i = 0

while (i < 10) {
    console.log(`Number ${i}`)
    i++
}

// Do While loop
do {
    console.log(`Number ${i}`)
    i++
} while (i < 10)

// Looping through arrays
cars = ['Ford', 'BMW', 'Mercedes', 'Chevrolet', 'Toyota']

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

/*
    - Foreach and Map functions can take 3 arguments
    1 - value
    2 - index
    3 - array
*/
// Foreach loop
cars.forEach((car, index, array) => {
    console.log(`${index}:${car}`)
    console.log(array)
})

// Map
const users = [
    { id: 1, name: 'Emmanuel', age: 19, role: 'Developer' },
    { id: 2, name: 'Nicole', age: 18, role: 'Designer' },
    { id: 3, name: 'Susan', age: 21, role: 'Graphics' },
]

const ids = users.map((user, index, array) => {
    console.log(`${index} : ${user.id}:${user.name}`)
    console.log(array)
})

const user = { id: 1, name: 'Emmanuel', age: 19, role: 'Developer' }

for (let x in user) {
    console.log(`${x}:${user[x]}`)
}
