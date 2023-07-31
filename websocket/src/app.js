const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3002 });

let clients = new Set();

server.on('connection', (ws) => {

  clients.add(ws);
  console.log('Nouvelle connexion WebSocket établie.');

  ws.on('message', (message) => {
    console.log('Message reçu :', message);

    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log('Connexion WebSocket fermée.');
  });
});

console.log('Serveur WebSocket en cours d\'exécution sur le port 3002');
