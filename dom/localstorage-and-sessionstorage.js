/*
    - localStorage and sessionStorage are similar,
    the only difference is that sessionStorage is
    cleared once the browser is closed where as
    localStorage has to be cleared manually
*/
let val

// Localstorage
// localStorage.setItem('name', 'Emmanuel')
// val = localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear()

// Sessionstorage
// sessionStorage.setItem('name', 'Karanja')
// val = sessionStorage.getItem('name')
// sessionStorage.removeItem('name')
// sessionStorage.clear()

// console.log(val)

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    let tasks = []
    const task = document.getElementById('task').value

    if (localStorage.getItem('tasks') !== null) {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    if (tasks.push(task)) task = ''
    localStorage.setItem('tasks', JSON.stringify(tasks))
})

const tasks = JSON.parse(localStorage.getItem('tasks'))
console.log(tasks)