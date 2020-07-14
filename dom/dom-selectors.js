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
let elements
elements = document.getElementsByTagName('li')
elements = Array.from(elements) // Required
elements.forEach(element => element.style.color = 'red')

elements = document.querySelectorAll('li')
elements.forEach(element => element.style.color = 'blue')

/*
    - It is possible to use css selectors with querySelector()
*/
let oddElements = document.querySelectorAll('li:nth-child(odd)')
oddElements.forEach(element => element.style.background = '#ddd')

let evenElements = document.querySelectorAll('li:nth-child(even)')
evenElements.forEach(element => element.style.background = '#f4f4f4')