// The document object
let val = document

console.log(val)

// DOM selectors
/*
    - You can select DOM elements using classLists,
    Ids, names or tags.

    - The diference between querySelectorAll() and
    other multiple element selectors is that it will
    return a NodeList while the wrest will return a
    HTMLCollection.

    - The difference between the two is while using a forEach
    loop, HTMLCollections need to be converted to arrays so
    you can loop through while NodeLists dont and while using
    a for loop you can loop through both.
*/

let elements = document.getElementsByTagName('h1')
elements = Array.from(elements) // Required
elements.forEach(element => element.style.color = 'red')

let element = document.querySelectorAll('h1')
elements.forEach(element => element.style.color = 'red')

/*
    - It is possible to use css selectors with querySelector()
*/
let oddElements = document.querySelectorAll('h1:nth-child(odd)')
oddElements.forEach(element => element.style.color = 'blue')

console.log(elements)
