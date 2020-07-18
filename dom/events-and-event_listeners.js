const card = document.querySelector('.card')
const cardTitle = document.querySelector('h5')
const clearBtn = document.querySelector('.clear-tasks')

// Mouse events
// clearBtn.addEventListener('click', e => {
/*
    - preventDefalt() prevents the default action
    of an element from happeinig. For instance, it
    will stop a form submision from reloading the
    page.
*/
//     e.preventDefault()
// })

// clearBtn.onclick = e => {
//     let val

//     val = e
//     val = e.type // event type
//     val = e.target // the element being clicked on
//     val = e.target.classList

//     // Cords relative to the window
//     val = e.clientY
//     val = e.clientX

//     // Cords relative to the element
//     val = e.offsetY
//     val = e.offsetX

//     console.log(val)
// }

// clearBtn.addEventListener('click', mouseEvent)
// clearBtn.addEventListener('dblclick', mouseEvent)
// clearBtn.addEventListener('mousedown', mouseEvent)
// clearBtn.addEventListener('mouseup', mouseEvent)
/*
    - The difference between mouseleave and mouseover is
    that mouseleave fires only when the element the pointer
    leaves the element and its children while mouseover fires
    when the pointer focuses on a child element or leaves the
    element completely.
*/
// card.addEventListener('mouseenter', mouseEvent)
// card.addEventListener('mouseleave', mouseEvent)
// card.addEventListener('mouseover', mouseEvent)
// card.addEventListener('mouseout', mouseEvent)
// card.addEventListener('mousemove', mouseEvent)

// function mouseEvent(e) {
//     console.log(`Event type: ${e.type}`)
//     cardTitle.innerText = `OffsetX: ${e.offsetX}, OffsetY: ${e.offsetY}`
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`
// }

// Keyboard events

const form = document.querySelector('form')
const taskInput = document.getElementById('task')

taskInput.value = ''

// form.addEventListener('submit', keyboardEvent)
// taskInput.addEventListener('keydown', keyboardEvent)
// taskInput.addEventListener('keyup', keyboardEvent)
// taskInput.addEventListener('keypress', keyboardEvent)
// taskInput.addEventListener('focus', keyboardEvent)
// taskInput.addEventListener('blur', keyboardEvent)
// taskInput.addEventListener('cut', keyboardEvent)
// taskInput.addEventListener('paste', keyboardEvent)
/*
    - The input event fires on every action taken in
    the input field except focus and blur.
*/
taskInput.addEventListener('input', keyboardEvent)

function keyboardEvent(e) {
    // e.preventDefault() 

    console.log(`Event type: ${e.type}`)
    // console.log(e.target.value)

    // cardTitle.innerText = taskInput.value
}
