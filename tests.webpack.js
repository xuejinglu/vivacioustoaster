const clientContext = require.context('./client', true, /-test\.jsx?$/);
const serverContext = require.context('./server', true, /-test\.jsx?$/);
clientContext.keys().forEach(clientContext);
serverContext.keys().forEach(serverContext);
