const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const boardRoutes = require('./controllers/boards');
const bodyParser = require('body-parser');
const userRoutes = require('./controllers/users');

const server = express();

server.use(cors({origin:'http://localhost:3001',credentials:true,methods:['GET', 'PUT', 'POST','DELETE']}));
server.use(cookieParser());
server.use(helmet());
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use('/boards',boardRoutes);
server.use('/flow',userRoutes);


module.exports = server;
