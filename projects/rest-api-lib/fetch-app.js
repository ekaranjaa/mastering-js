const http = new EasyHTTP
const output = document.querySelector('.output')
const createBtn = document.querySelector('.btn.create')
const readBtn = document.querySelector('.btn.read')
const updateBtn = document.querySelector('.btn.update')
const trashBtn = document.querySelector('.btn.trash')
const restoreBtn = document.querySelector('.btn.restore')
const deleteBtn = document.querySelector('.btn.delete')

// Get all users
readBtn.onclick = () => {
    http.get('http://qdc.api/api/get/users')
        .then(res => output.innerHTML = res)
        .catch(err => console.log(err))
}

// Get single users
readBtn.ondblclick = () => {
    http.get('http://qdc.api/api/show/user/ekaranja')
        .then(res => output.innerHTML = res)
        .catch(err => console.log(err))
}

// Add user
const newUser = {
    name: 'Emmanuel Karanja',
    email: 'ekaranja@ex.com',
    username: 'ekaranja',
    password: '123456'
}
createBtn.onclick = () => {
    http.post('http://qdc.api/api/store/user', newUser)
        .then(res => output.innerHTML = res)
        .catch(err => console.log(err))
}

// Update user
const updatedUser = {
    name: 'Karanja Emmanuel',
    password: '123456'
}
updateBtn.onclick = () => {
    http.put('http://qdc.api/api/update/user/ekaranja', updatedUser)
        .then(res => output.innerHTML = res)
        .catch(err => console.log(err))
}

// Soft delete user
trashBtn.onclick = () => {
    http.delete('http://qdc.api/api/trash/user/ekaranja')
        .then(res => output.innerHTML = res)
        .catch(err => console.log(err))
}

// Restore user
restoreBtn.onclick = () => {
    http.post('http://qdc.api/api/restore/user/ekaranja', null)
        .then(res => output.innerHTML = res)
        .catch(err => console.log(err))
}

// Permanently delete user
deleteBtn.onclick = () => {
    http.delete('http://qdc.api/api/destroy/user/ekaranja')
        .then(res => output.innerHTML = res)
        .catch(err => console.log(err))
}
