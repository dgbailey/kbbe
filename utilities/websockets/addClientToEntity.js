const addClientToEntity = (client, entityId, s) => {
  //mutation of entity container
  if (!s.locals.clients[entityId]) {
    s.locals.clients[entityId] = [client];
  } else {
    s.locals.clients[entityId].push(client);
  }
};

module.exports = addClientToEntity;
