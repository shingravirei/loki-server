let ws = new WebSocket('ws://localhost:8080');

ws.addEventListener('open', (e) => {
    ws.send('Hello Server!');
});

ws.addEventListener('message', (e) => {
    console.log('Message from server:', event.data);
});
