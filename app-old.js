const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Juanjo',
        edad: 32,
        url: req.url
    }

    res.write(JSON.stringify(salida));

    res.end();

}).listen(8080);

console.log('Escucnahdo el puerto 8080');