let display = document.querySelector('.showData')
// IP HARDCODEADA (CAMBIAR!!!!!!!!!!!!!!!!!)
// TIENE QUE SER LA IP PRIVADA DE LA COMPU EN LA QUE CORRE EL SERVER
fetch('http://127.0.0.1/datos.json')
    .then((res) => { return res.json() })
    .then((data) => {
        for (dato in data) {
            let printData = document.createElement('h2')
            printData.textContent = `${dato}: ${data[dato]}`
            display.appendChild(printData)
        }
    })
    .catch(() => {
        let errorMessage = document.createElement('h2')
        errorMessage.textContent = 'Falló la conexion con el servidor adquisidor de datos'
        display.appendChild(errorMessage)
    })