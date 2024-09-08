let display = document.querySelector('.showData')
//! IP HARDCODEADA (CAMBIAR!!!!!!!!!!!!!!!!!)
//! TIENE QUE SER LA IP PRIVADA DE LA COMPU EN LA QUE CORRE EL SERVER

let delayStart = true

printDatos()
actualizarDatos()

function printDatos() {
    fetch('http://192.168.8.202/datos.json')
        .then((res) => { return res.json() })
        .then((data) => {
            display.innerHTML = "<h1>Dashboard</h1>"
            for (dato in data) {
                let printData = document.createElement('h2')
                printData.textContent = `${dato}: ${data[dato]}`
                display.appendChild(printData)
            }
        })
        .catch(() => {
            let errorMessage = document.createElement('h2')
            errorMessage.textContent = 'Falló la conexion con la base de datos'
            display.appendChild(errorMessage)
        })
}

function actualizarDatos() {
    setTimeout(() => {
        printDatos()
        actualizarDatos()
    }, 1000)
}

