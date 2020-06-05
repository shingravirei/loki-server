const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const jwt = require('jsonwebtoken');
const path = require('path');
const { broadcast } = require('./lib');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ noServer: true });
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', (ws, req, token) => {
    broadcast(wss, ws, `User: ${token} has connected`);

    ws.on('message', message => {
        console.log('Received message: ', message);

        ws.send('hello!');
    });

    ws.on('close', () => {
        console.log('closed');
    });
});

server.on('upgrade', async (req, socket, head) => {
    const { cookie } = req.headers;

    // TODO: add jwt verification here

    if (!cookie) {
        socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
        socket.destroy();
        return;
    }

    const token = cookie.split('=')[1];

    wss.handleUpgrade(req, socket, head, ws => {
        wss.emit('connection', ws, req, token);
    });
});

server.listen(PORT, () => {
    console.log(`Serving on port ${PORT}...`);
});
