/**
 * @param {Object} expressServer - The express server instance
 * @param {Object} webSocketServer - The web socket server returned form ("express-ws")(server);
 */

function enableWebSocketChannels(expressServer, webSocketServer) {
  webSocketServer.getWss().on("connection", (ws, req) => {
    if (!expressServer.locals.clients) {
      expressServer.locals.clients = {};
    }
  });
}

module.exports = enableWebSocketChannels;
