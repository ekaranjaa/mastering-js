class EasyHTTP {
    constructor() {
        this.data
    }

    async get(url) {
        const response = await fetch(url)
        this.data = await response.json()

        return this.data
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        this.data = await response.json()

        return this.data
    }

    async put(url, data) {
        const response = fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        this.data = (await response).json()

        return this.data
    }

    async delete(url) {
        fetch(url, { method: 'DELETE' })
        this.data = 'User deleted'

        return this.data
    }
}