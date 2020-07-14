// Traversing the DOM
/*
    - The difference between selecting childNodes and children is 
    that childNodes return child elments, comments and whitespace
    while the latter will only return the child elements. Similarly,
    while using firstChild/lastChilde, a Node is returned as opposed
    to firstElementChild/lastElementChild where the first element returned.

    - Like dom selectors, using children will return a HTMLCollection
    while childNodes will return a NodeList similar to querySelectorAll()
*/

let ul = document.querySelector('ul')
// Child selectors
elements = ul.childNodes
elements = ul.children
// First child
elements = ul.firstChild
elements = ul.firstElementChild
// Last child
elements = ul.lastChild
elements = ul.lastElementChild
// Count children
elements = ul.childElementCount

// Parent selectors
/*
    - Unlike children selectors, parent selectors return pretty much the
    same thing.
*/
let element

let li = document.querySelector('li')
element = li.parentNode
element = li.parentElement
element = li.parentElement.parentNode // Returns parent of parent

// Sibling selectors (next and previous)
element = li.nextSibling
element = li.nextElementSibling

element = li.previousSibling
element = li.previousElementSibling

console.log(element)
