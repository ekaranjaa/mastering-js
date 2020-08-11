const http = new easyHttp
const output = document.querySelector('.output')
const createBtn = document.querySelector('.btn.create')
const readBtn = document.querySelector('.btn.read')
const updateBtn = document.querySelector('.btn.update')
const trashBtn = document.querySelector('.btn.trash')
const restoreBtn = document.querySelector('.btn.restore')
const deleteBtn = document.querySelector('.btn.delete')

// Get all users
readBtn.onclick = () => {
    http.get('http://qdc.api/api/get/users', function (err, users) {
        if (!err) {
            output.innerHTML = users
        } else {
            output.innerHTML = err
        }
    })
}

// Get single user
readBtn.ondblclick = () => {
    http.get('http://qdc.api/api/show/user/ekaranja', function (err, user) {
        if (!err) {
            output.innerHTML = user
        } else {
            output.innerHTML = err
        }
    })
}

// Create user
const newUser = {
    name: 'Emmanuel Karanja',
    email: 'ekaranja@ex.com',
    username: 'ekaranja',
    password: '123456'
}
createBtn.onclick = () => {
    http.post('http://qdc.api/api/store/user', newUser, function (err, user) {
        if (!err) {
            output.innerHTML = user
        } else {
            output.innerHTML = err
        }
    })
}

// Update user
const updatedUser = {
    name: 'Karanja Emmanuel',
    password: '654321'
}
updateBtn.onclick = () => {
    http.put('http://qdc.api/api/update/user/ekaranja', updatedUser, function (err, user) {
        if (!err) {
            output.innerHTML = user
        } else {
            output.innerHTML = err
        }
    })
}

// Soft delete user 
trashBtn.onclick = () => {
    http.delete('http://qdc.api/api/trash/user/ekaranja', function (err, user) {
        if (!err) {
            output.innerHTML = user
        } else {
            output.innerHTML = err
        }
    })
}

// Restore user
restoreBtn.onclick = () => {
    http.post('http://qdc.api/api/restore/user/ekaranja', null, function (err, user) {
        if (!err) {
            output.innerHTML = user
        } else {
            output.innerHTML = err
        }
    })
}

// Permanently delete user
deleteBtn.onclick = () => {
    http.delete('http://qdc.api/api/destroy/user/ekaranja', function (err, user) {
        if (!err) {
            output.innerHTML = user
        } else {
            output.innerHTML = err
        }
    })
}
