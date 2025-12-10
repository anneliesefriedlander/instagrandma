const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
res.statusCode = 200; // successful response
res.setHeader('Content-Type', 'text/plain'); // plain text indication
res.end('Hello World\n'); // signals to server nothing comes after this i.e. terminates response process
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});