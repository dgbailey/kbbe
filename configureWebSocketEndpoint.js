const broadCast = require("./utilities/websockets/broadCast");
const addClientToEntity = require("./utilities/websockets/addClientToEntity");
const marshallClientMetaData = require("./utilities/websockets/marshallClientMetaData");
const pruneInactiveClient = require("./utilities/websockets/pruneInactiveClient");
/**
 * @param {Object} expressServer - The express server instance
 *
 */

/*
Web Socket Flow -- User Presence
	Client:mounts websocket and creates new connection
	Client-Event: onopen => client sends eventType, username, userid, and entityid(aka your ws channel id)
	Server-Event: connection => checks to make sure we are ready to create ws channels.
	Server-Event: message => matches eventType, completes eventType actions, and broadcasts results to channel.
*/

function configureWebSocketEndpoint(expressServer) {
  expressServer.ws("/ws", function (ws, req) {
    //incoming ws connection.
    ws.on("message", function (msg) {
      let parsed = JSON.parse(msg);
      let { type, payload } = parsed;
      let clientMetaData;
      /*
              payload shape
              { entityId: uuid string,
                userId: uuid string,
                username: string }
              */
      switch (type) {
        case "SOCKET_OPEN":
          ws.isActive = true;
          ws.userMeta = { ...payload };
          addClientToEntity(ws, payload.entityId, expressServer);
          clientMetaData = marshallClientMetaData(
            expressServer,
            payload.entityId
          );
          broadCast(
            expressServer.locals.clients,
            { socketPayload: type, clientMetaData },
            payload.entityId
          );
          // console.log('Total active boards:', Object.keys(expressServer.locals.clients));
          break;
        case "SOCKET_CLOSE":
          ws.isActive = false;
          clientMetaData = marshallClientMetaData(
            expressServer,
            payload.entityId
          );
          pruneInactiveClient(ws, expressServer, payload.entityId);
          broadCast(
            expressServer.locals.clients,
            { socketPayload: type, clientMetaData },
            payload.entityId
          );
          break;
      }
    });
    ws.on("close", function (msg) {
      //closing will remove ws from ws expressServer instance but not from channels
    });
  });
}
module.exports = configureWebSocketEndpoint;
