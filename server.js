const http = require('http');
const url = require('url')
const fileSystem = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) => {
    // __dirname -> variable de entorno de node.js con el path al directorio actual
    var indexPath = path.join(__dirname, 'index.html');
    var indexLength = fileSystem.statSync(indexPath);
    res.writeHead(200, {
        'Content-Type': 'text/html; charset: utf-8',
        'Content-length': indexLength.size,
    });
    var readStream = fileSystem.createReadStream(indexPath);
    // Inserta el archivo leido en el objeto Writable (respuesta)
    readStream.pipe(res);

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 