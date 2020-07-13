// Window methods, objects, properties
// alert('Hello World!')
// let input = prompt()
// alert(prompt)
// confirm('Are you sure') ? alert('Yes') : alert('No')

let val

// Outer height and width - Returns the size of the browser window
val = window.outerHeight
val = window.outerWidth

// Inner height and width 
/*
    - Returns the size of the interaction window. Meaning
    that the scroll bar is not included and other browser
    elements like the terminal (if it's open)
*/
val = window.innerHeight
val = window.innerWidth

// Scroll positions
val = window.scrollY
val = window.scrollX

// Location object - Returns page specs like url, host, port...
// Inspect in the console for more
val = window.location

// History object
// window.history.go() // Navigate to your recently visited urls

// Navigator object - Returns things like hardware specs, browser specs
// Inspect in the console for more
val = window.navigator

console.log(val)