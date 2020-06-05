document.cookie = 'token=someToken';

const ws = new WebSocket('ws://localhost:8080');

ws.addEventListener('open', e => {
    ws.send('Hello Server!');
});

ws.addEventListener('message', e => {
    console.log(e.data);
});

ws.addEventListener('error', e => {
    console.log(e);
});
