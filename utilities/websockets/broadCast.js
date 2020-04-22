const WebSocket = require('ws');
const broadCast = (clients, message) => {
	console.log(clients.constructor.name);
	clients.forEach((c) => {
		console.log(c);
		if (c.readyState === WebSocket.OPEN) {
			c.send(message);
		}
	});
};

module.exports = broadCast;
