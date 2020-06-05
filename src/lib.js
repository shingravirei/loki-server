const broadcast = (wss, ws, message) => {
    wss.clients.forEach(client => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
};

module.exports = { broadcast };
