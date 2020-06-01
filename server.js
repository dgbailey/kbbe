const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const boardRoutes = require("./controllers/boards");
const columnRoutes = require("./controllers/columns");
const itemRoutes = require("./controllers/items");
const bodyParser = require("body-parser");
const userRoutes = require("./controllers/users");
const clientErrorHandler = require("./utilities/middleware/clientErrorHandler");
const catchAllErrorHandler = require("./utilities/middleware/catchAllErrorHandler");
const server = express();
const enableWs = require("express-ws")(server);
const enableWebSocketChannels = require("./utilities/websockets/enableWebSocketChannels");
const configureWebSocketEndpoint = require("./utilities/websockets/configureWebSocketEndpoint");
server.use(
  cors({
    origin: process.env.CLIENT_WHITE_LIST,
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);
server.use(bodyParser.json());
server.use(cookieParser());
server.use(helmet());
server.use(morgan(process.env.SERVER_LOG_SETTING));

server.use("/boards", boardRoutes);
server.use("/flow", userRoutes);
server.use("/items", itemRoutes);
server.use("/columns", columnRoutes);
server.use(clientErrorHandler);
server.use(catchAllErrorHandler);

//enable ws channels
enableWebSocketChannels(server, enableWs);
//configure ws endpoint events
configureWebSocketEndpoint(server);

module.exports = server;
