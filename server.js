const http = require('http');
const app = require('./app.js');

const port = 3000;

const server = http.createServer(app);

server.on('listening', () => {
    console.log(`Server is running on port ${port}`);
});

server.listen(port);