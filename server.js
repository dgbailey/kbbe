const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const boardRoutes = require('./controllers/boards');
const columnRoutes = require('./controllers/columns');
const itemRoutes = require('./controllers/items');
const bodyParser = require('body-parser');
const userRoutes = require('./controllers/users');
const clientErrorHandler = require('./utilities/middleware/clientErrorHandler');
const catchAllErrorHandler = require('./utilities/middleware/catchAllErrorHandler');
const server = express();
const enableWs = require('express-ws')(server);
const broadCast = require('./utilities/websockets/broadCast');
const addClientToEntity = require('./utilities/websockets/addClientToEntity');
server.use(
	cors({ origin: process.env.CLIENT_WHITE_LIST, credentials: true, methods: [ 'GET', 'PUT', 'POST', 'DELETE' ] })
);
server.use(bodyParser.json());
server.use(cookieParser());
server.use(helmet());
server.use(morgan(process.env.SERVER_LOG_SETTING));

server.use('/boards', boardRoutes);
server.use('/flow', userRoutes);
server.use('/items', itemRoutes);
server.use('/columns', columnRoutes);
server.use(clientErrorHandler);
server.use(catchAllErrorHandler);

//this gives us the WS server instance
enableWs.getWss().on('connection', (ws, req) => {
	if (!server.locals.clients) {
		server.locals.clients = {};
	}
	
});

//this represents an endpoint for an already connected client.
//any time this endpoint receives a message it will be open or close
//each event necessitates a rebroadcast of active clients
//on message filter 

/*
currently
socket opens, regesters to channel, receives broadcasts
currently
only broadcasts newly active connections, already active connections are never broadcast
currently
server does not handle active vs inactive data. Client labels on server broadcast

client meta details {username, id}

approach: ON CLIENT OPEN
client cill send socket request, then SOCKET OPEN message type
server will add meta data to client instance .isActive = true at this point and .userMeta = {userObject}
server will marshall all active connections beloning to entity id and send list of userMeta Objects
server will broadcast 

approach: ON CLIENT CLOSE
client will send socket close message type
server will update ws.isActive to false
server will prune list of connections on the channel that are not active
server will broadcast new list of clients

*/

server.ws('/ws', function(ws, req) {
	
	ws.on('message', function(msg) {
		
		let parsed = JSON.parse(msg);
		let {type,payload,status} = parsed;

		//TODO: import this as utility
		function grabActiveClients(entityId){
			let activeClients = [];
			server.locals.clients[entityId].forEach(c => {
				if(c.isActive){
					c.userMeta['isActive'] = c.isActive;
					activeClients.push(c.userMeta)
				} 
			});
			return activeClients
		}
		
	
		switch(type){
			case 'SOCKET_OPEN':
				ws.isActive = true;
				ws.userMeta = {...payload};
				addClientToEntity(ws, payload.entityId, server);
				let activeClientsToBroadCast = grabActiveClients(payload.entityId);
				// console.log('Total active boards:', Object.keys(server.locals.clients));
				console.log('server open payload',payload);
				broadCast(server.locals.clients,{socketPayload:type,activeClientsToBroadCast},payload.entityId)
				break;
			case 'SOCKET_CLOSE':
				//receives entity id
				//each returning connection uses same connection object instance?
				let previousConnections = server.locals.clients[payload.entityId];
				let updatedConnections = previousConnections.filter(c => c !== ws);
				if(updatedConnections.length === 0){
					delete server.locals.clients[payload.entityId];
				}
				else{
					server.locals.clients[payload.entityId] = updatedConnections;
				}
				broadCast(server.locals.clients,{socketPayload:type,...payload},payload.entityId)
				//broadcast userid to connections for update
				break;
		}
		
	});
	ws.on('close', function(msg){
		//closing will remove ws from ws server instance but not from channels
		// console.log('unmounting',msg)
		// console.log('clientlist',server.locals.clients)
		// console.log('clientlist',enableWs.getWss().clients)
		//this seems to not be possible. Socket message must interpret
		//tjhis is where we were hoping to include some broadcasting logic
	})
});

module.exports = server;
