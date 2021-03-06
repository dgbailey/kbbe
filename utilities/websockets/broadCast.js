const WebSocket = require('ws');
const broadCast = (clients, message, entityId) => {
	let entityMembers = clients[entityId];
	if (entityMembers) {
		entityMembers.forEach((c) => {
			if (c.readyState === WebSocket.OPEN) {
				c.send(JSON.stringify(message));
			}
		});
	}
};

module.exports = broadCast;
