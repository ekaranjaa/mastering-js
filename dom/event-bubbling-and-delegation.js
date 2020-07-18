/*
    - Event bubbling passes events up the dom
    from the child listener to its parents.

    - Event delegation on the other hand, is
    putting the listener on the parent and using
    logic inside the event handler to target the
    element intended.
*/
// Event bubbling
// document.querySelector('.card-title').addEventListener('click', () => console.log('Card title'))
// document.querySelector('.card-content').addEventListener('click', () => console.log('Card content'))
// document.querySelector('.card').addEventListener('click', () => console.log('Card'))
// document.querySelector('.col').addEventListener('click', () => console.log('col'))

// Event delegation
document.body.addEventListener('click', delItem)

function delItem(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('Delete item')
        e.target.parentElement.parentElement.remove()
    }
}
