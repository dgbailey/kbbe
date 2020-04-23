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
const addClientToEntity = require('./utilities/websockets/addClientToEntity');
server.use(cors({ origin: 'http://localhost:3000', credentials: true, methods: [ 'GET', 'PUT', 'POST', 'DELETE' ] }));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(helmet());
server.use(morgan('dev'));

server.use('/boards', boardRoutes);
server.use('/flow', userRoutes);
server.use('/items', itemRoutes);
server.use('/columns', columnRoutes);
server.use(clientErrorHandler);
server.use(catchAllErrorHandler);

server.ws('/ws/:entityId', function(ws, req) {
	ws.on('message', function(msg) {
		console.log(q);
		// console.log(req.server.locals.clients);
		ws.send(msg);
	});
});

enableWs.getWss().on('connection', (ws, req) => {
	let entityId = req.params.entityId;
	if (!server.locals.clients) {
		server.locals.clients = {};
	}
	console.log(server.locals.clients);
	addClientToEntity(ws, entityId, server);
	console.log('Total active documents:', Object.keys(server.locals.clients));
});

module.exports = server;
