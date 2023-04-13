/**
 * Package Import
 */
const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');

/**
 * Constants
 */
const SERVER_PORT = 3030;
const SERVER_NAME = 'kwidzy';
const SERVER_VERSION = '1.0.0';

/**
 * Restify Server
 */
const server = restify.createServer({
  name: SERVER_NAME,
  version: SERVER_VERSION
});


const cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ['*'],
  allowHeaders:['X-App-Version'],
  exposeHeaders:[]
});

server.pre(cors.preflight)
server.use(cors.actual)

server.use(restify.plugins.jsonBodyParser({ mapParams: true }));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({ mapParams: true }));
server.use(restify.plugins.fullResponse());

require('./routes/routes')(server);

server.listen(SERVER_PORT, () => {
  console.log(`${SERVER_NAME} listening at ${SERVER_PORT}`);
});