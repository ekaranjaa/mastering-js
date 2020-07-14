// Creating elements
const ul = document.querySelector('ul.collection')

const li = document.createElement('li')
li.id = 'listItem' // add id
li.className = 'collection-item' // add class
li.setAttribute('title', 'New item') // add more attributes
/*
    - The innerText property returns/appends just the text, without spacing and inner element tags.
    - The innerHTML property returns/appends the text, including all spacing and inner element tags.
    - The textContent property returns/appends the text with spacing, but without inner element tags.
    textContent is similar to createTextNode()
*/
// li.textContent = 'Hello world'
// li.innerText = 'Hello world'
// li.innerHTML = 'Hello world'

// Append children
li.appendChild(document.createTextNode('New item'))
ul.appendChild(li)

const link = document.createElement('a')
link.className = 'delete-item secondary-content'
link.setAttribute('href', '#')
link.innerHTML = '<i class="fa fa-remove"></i>'

li.appendChild(link)
