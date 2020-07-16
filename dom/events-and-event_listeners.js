const card = document.querySelector('.card')
const cardTitle = document.querySelector('h5')
const clearBtn = document.querySelector('.clear-tasks')

// Mouse events
// clearBtn.addEventListener('click', e => {
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



function keyboardEvent(e) {
    console.log(`Event type: ${e.type}`)
}
