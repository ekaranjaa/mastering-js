let val
let listItems = document.querySelectorAll('li')

let link = listItems[0].children[0]
link.classList.add('test')
link.classList.remove('test')
val = link.getAttribute('href')
val = link.hasAttribute('title')
link.setAttribute('title', 'Portfolio')
link.setAttribute('href', 'https://ekaranja.netlify.app')
link.removeAttribute('title')

console.log(val)
console.log(link)
