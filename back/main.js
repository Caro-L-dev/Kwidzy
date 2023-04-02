/**
 * Package Import
 */
var restify = require('restify');
// require('dotenv').config();

/**
 * Port
 */
const SERVER_PORT = 3030

/**
 * Restify Server
 */
var server = restify.createServer({
  name: 'kwidzy',
  version: '1.0.0'
});

server.use(restify.plugins.jsonBodyParser({ mapParams: true }));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({ mapParams: true }));
server.use(restify.plugins.fullResponse());
require('./routes/routes')(server);

server.listen(SERVER_PORT, () => {
  console.log(server.name + ' listening at ' + SERVER_PORT);
});