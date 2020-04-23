const WebSocket = require('ws');
const broadCast = (clients, message, entityId) => {
	let entityMembers = clients[entityId];
	console.log('members', entityMembers);
	if (entityMembers) {
		entityMembers.forEach((c) => {
			console.log(c);
			if (c.readyState === WebSocket.OPEN) {
				c.send(message);
			}
		});
	}
};

module.exports = broadCast;
