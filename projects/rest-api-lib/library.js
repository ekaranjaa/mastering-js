function easyHttp() {
    this.http = new XMLHttpRequest
}

/* CRUD functions in prototypes below */

// GET
easyHttp.prototype.get = function (url, callback) {
    this.http.open('GET', url, true)

    const self = this
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText)
        } else {
            callback(`Error: ${self.http.status}`)
        }
    }

    this.http.send()
}

// POST
easyHttp.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')

    const self = this
    this.http.onload = function () {
        callback(null, self.http.responseText)
    }

    this.http.send(JSON.stringify(data))
}

// PUT
easyHttp.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')

    const self = this
    this.http.onload = function () {
        callback(null, self.http.responseText)
    }

    this.http.send(JSON.stringify(data))
}


// DELETE
easyHttp.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true)

    const self = this
    this.http.onload = function () {
        callback(null, self.http.responseText)
    }

    this.http.send()
}
