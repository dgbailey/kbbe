const initializeChannels = require("./initializeChannels");
const composeWithHeartBeat = require("./composeWithHeartBeat");
const initializeHeartBeat = require("./initializeHeartBeat");
/**
 * @param {Object} expressServer - The express server instance
 * @param {Object} webSocketServer - The web socket server returned form ("express-ws")(server);
 */

function enableWebSocketChannels(expressServer, webSocketServer) {
  initializeChannels(expressServer);
  initializeHeartBeat(webSocketServer, 20000);

  webSocketServer.getWss().on("connection", (ws, req) => {
    composeWithHeartBeat(ws);
  });
}

module.exports = enableWebSocketChannels;
