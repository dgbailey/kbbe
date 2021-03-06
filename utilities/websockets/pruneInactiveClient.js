/**
 * @param {Object} ws - The newly inactive web socket instance
 * @param {Object} expressServer - The express server instance
 * @param {String} entityId - The uuid of our channel
 */
function pruneInactiveClient(ws, expressServer, entityId) {
  //wss will clean it's record of inactive client instances
  //However channel will not. this is why the following is necessary
  let channels = expressServer.locals.clients;

  if (channels[entityId]) {
    channels[entityId] = expressServer.locals.clients[entityId].filter(
      (c) => c !== ws
    );
    if (channels[entityId].length === 0) {
      delete expressServer.locals.clients[entityId];
    }
  }
}

module.exports = pruneInactiveClient;
