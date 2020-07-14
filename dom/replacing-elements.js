const currentHeading = document.getElementById('task-title')

const newHeading = document.createElement('h4')
newHeading.id = 'task-title'
newHeading.appendChild(document.createTextNode('Tasks List'))

const card = document.querySelector('.card-action')
card.replaceChild(newHeading, currentHeading)

console.log(newHeading)