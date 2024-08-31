const http = require('http');
const url = require('url')
const fileSystem = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 80;

const dataPath = path.join(__dirname, 'datos.json')
let dataFile = fileSystem.readFileSync(dataPath)

const indexPath = path.join(__dirname, 'index.html')
let indexHTML = fileSystem.readFileSync(indexPath)

const stylePath = path.join(__dirname, 'style.css')
let styleSheet = fileSystem.readFileSync(stylePath)

const scriptPath = path.join(__dirname, 'index.js')
let indexScript = fileSystem.readFileSync(scriptPath)


let data = {}

function dataAppend(key, value) {
    data[key] = value
    let dataJSON = JSON.stringify(data)
    fileSystem.writeFile(dataPath, dataJSON, (err) => {
        if (err) throw err
    })
    updateData()
}

function updateData() {
    dataFile = fileSystem.readFileSync(dataPath)
}


const server = http.createServer((req, res) => {
    // __dirname -> variable de entorno de node.js con el path al directorio actual
    let parsedUrl = url.parse(req.url,true)
    if (req.url === '/datos.json') {
        updateData()
        res.setHeader('Content-type', 'application/json')
        res.write(dataFile)
    }
    else if (req.url === '/style.css') {
        res.setHeader('Content-type', 'text/css')
        res.write(styleSheet)
    }
    else if (req.url === '/index.js') {
        res.setHeader('Content-type', 'text/javascript')
        res.write(indexScript)
    }
    else if (parsedUrl.pathname === '/update') {
        console.log('Solicitud de update!!!!')
        let parsedQuery = url.parse(req.url, true).query
        for (dato in parsedQuery) {
            dataAppend(dato, parsedQuery[dato])
        }
    }
    else {
        res.setHeader('Content-type', 'text/html; charset: utf-8')
        res.write(indexHTML)
    }
    res.end()
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 