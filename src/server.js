const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', (ws, req) => {
    ws.on('message', (message) => {
        console.log('Received message: ', message);

        ws.send('hello!');
    });

    ws.on('close', () => {
        console.log('closed');
    });
});

server.listen(8080, () => {
    console.log('Listening on port 8080');
});
