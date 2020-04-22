const WebSocket = require('ws');
const broadCast = (clients, message) => {
	clients.forEach((c) => {
		if (client.readyState === WebSocket.OPEN) {
			client.send(message);
		}
	});
};

module.exports = broadCast;
