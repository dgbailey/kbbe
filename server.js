const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const boardRoutes = require('./controllers/boards');
const bodyParser = require('body-parser');
const userRoutes = require('./controllers/users');

const server = express();

server.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use('/boards',boardRoutes);
server.use('/flow',userRoutes);


module.exports = server;
