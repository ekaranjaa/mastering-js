document.querySelector('.get').onclick = loadData
document.querySelector('.reload').onclick = () => location.reload()

function loadData() {
    const xhr = new XMLHttpRequest

    /*
        - For external APIs we would replace the filename with the
        API url
    */
    xhr.open('GET', 'customers.json', true)

    xhr.onprogress = () => {
        document.querySelector('.get').innerHTML = 'Loading...'
    }

    xhr.onload = function () {

        // Mimic a loading API :d
        setTimeout(() => {
            document.querySelector('.get').innerHTML = 'LOAD CUSTOMERS'
        }, 1000);

        if (this.status === 200) {
            const customers = JSON.parse(xhr.responseText)

            customers.forEach(customer => {
                document.querySelector('.output').innerHTML += `
                    <ul>
                        <li>Id: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Age: ${customer.age}</li>
                        <li>Department: ${customer.department}</li>
                        <li>Phone: ${customer.phone}</li>
                    </ul>
                `
            });
        }
    }

    xhr.send()
}
