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

server.ws('/ws', function(ws, req) {
	ws.on('message', function(msg) {
		ws.send(msg);
	});
});

enableWs.getWss().on('connection', (ws, req) => {
	console.log('Total connected clients:', enableWs.getWss().clients.size);
	server.locals.clients = enableWs.getWss.clients;
});

module.exports = server;
