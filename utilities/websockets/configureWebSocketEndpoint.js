const broadCast = require("./broadCast");
const addClientToEntity = require("./addClientToEntity");
const marshallClientMetaData = require("./marshallClientMetaData");
const pruneInactiveClient = require("./pruneInactiveClient");
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
    let clientMetaData;
    ws.on("message", function (msg) {
      let parsed = JSON.parse(msg);
      let { type, payload } = parsed;
      /*
              payload shape
              { entityId: uuid string,
                userId: uuid string,
                username: string }
              */
      switch (type) {
        case "SOCKET_OPEN":
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
      //could be duplicating work here to try and cover page refreshes
      ws.isActive = false;
      if (!expressServer.locals.clients[ws.userMeta.entityId]) {
        clientMetaData = marshallClientMetaData(
          expressServer,
          ws.userMeta.entityId
        );
        pruneInactiveClient(ws, expressServer, ws.userMeta.entityId);
        broadCast(
          expressServer.locals.clients,
          { socketPayload: "SOCKET_CLOSE", clientMetaData },
          ws.userMeta.entityId
        );
      }

      //closing will remove ws from ws expressServer instance but not from channels
    });
  });
}
module.exports = configureWebSocketEndpoint;
