// Functions and Expressions
function greetings(name = 'Emmanuel') {
    return `Hello ${name}`
}

const square = (x) => {
    return Math.pow(x, 2)
}

// Immediately Invoked Function Expressions - IIFE
((name) => {
    console.log(`Hello ${name}`)
})('Karanja')

// Property methods
const todo = {
    add: () => {
        console.log('Add todo...')
    },
    edit: (id) => {
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = (id) => {
    console.log(`Delete todo ${id}`)
}

todo.add()
todo.edit(1)
todo.delete(1)
