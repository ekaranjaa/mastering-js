document.querySelector('.btn.text').onclick = getText
document.querySelector('.btn.json').onclick = getJson
document.querySelector('.btn.api').onclick = getApiData
const output = document.querySelector('.output')

// Get local text data
function getText() {
    output.innerHTML = ''

    fetch('test.txt')
        .then(res => res.text())
        .then(text => {
            output.innerHTML = text
        })
        .catch(function (err) {
            console.log(err)
        })
}

// Get local JSON data
function getJson() {
    output.innerHTML = ''

    fetch('customers.json')
        .then(res => res.json())
        .then(customers => {
            customers.forEach(customer => {
                output.innerHTML += `<li>${customer.name}</li>`
            })
        })
        .catch(function (err) {
            console.log(err)
        })
}

// Get API data
function getApiData() {
    output.innerHTML = ''

    fetch('http://qdc.api/api/get/users')
        .then(res => res.json())
        .then(users => {
            users.data.forEach(user => {
                output.innerHTML += `<li>${user.name}</li>`
            });
        })
        .catch(function (err) {
            console.log(err)
        })
}
