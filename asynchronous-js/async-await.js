// Declare an `async` function
async function getUsers() {
    // Await response from the fetch call
    const response = await fetch('http://qdc.api/api/get/users')
    // Proceed once it's solved
    const data = await response.json()

    // Proceed once second promise is resolved
    return data
}

document.querySelector('.btn.json').onclick = () => {
    getUsers().then(users => console.log(users.data))
}
