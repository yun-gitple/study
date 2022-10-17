const WebSocket = require('ws');

module.exports = (server) => {
    const wss = new WebSocket.Server({server});

    wss.on('connection', (ws, req) => {
        const ip = req.headers['x-forwarder-for'] || req.connection.remoteAddress;
        console.log('~~ new client connection', ip);
        ws.on('message', (message) => {
            console.log('~~ message:', message);
        });
        ws.on('error', (error) => {
            console.log('~~ error:', error);
        });
        ws.on('close', () => {
            console.log('~~ closed', ip);
            clearInterval(ws.interval);
        });

        ws.interval = setInterval(() => {
            if (ws.readyState === ws.OPEN) {
                ws.send('sent message to client from jongha');
            }
        }, 3000);
    });
}