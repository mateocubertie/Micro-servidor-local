const http = require('node:http');
const url = require('node:url')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    let temperatura = url.parse(req.url, true).query
    console.log(temperatura)
    console.log(temperatura.temp)
    res.end(`Temperatura: ${temperatura.temp}°C`, 'utf-8');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 