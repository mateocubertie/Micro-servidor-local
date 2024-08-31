const http = require('http');
const url = require('url')
const fileSystem = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 80;

let sensorData = {}

const dataPath = path.join(__dirname, 'datos.json')
const dataJSON = fileSystem.readFileSync(dataPath)

const indexPath = path.join(__dirname, 'index.html')
const indexHTML = fileSystem.readFileSync(indexPath)

let test = {
    nombre: 'test'
}
let test1 = {
    nombre: 'test'
}
let test2 = {
    nombre: 'test'
}

let data = [test, test1, test2]

let testJSON = JSON.stringify(data)

fileSystem.writeFile(dataPath, testJSON, (err) => {
    if (err) throw err
})

const server = http.createServer((req, res) => {
    // __dirname -> variable de entorno de node.js con el path al directorio actual
    if (req.url === '/datos.json') {
        res.setHeader('Content-type', 'application/json')
        res.write(dataJSON)
    }
    else if (req.url === '/update') {
        let parsedQuery = url.parse(req.url, true)
        
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