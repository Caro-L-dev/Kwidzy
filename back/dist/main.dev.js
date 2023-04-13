"use strict";

/**
 * Package Import
 */
var restify = require('restify');

var corsMiddleware = require('restify-cors-middleware');
/**
 * Constants
 */


var SERVER_PORT = 3030;
var SERVER_NAME = 'kwidzy';
var SERVER_VERSION = '1.0.0';
/**
 * Restify Server
 */

var server = restify.createServer({
  name: SERVER_NAME,
  version: SERVER_VERSION
});
var cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ['*'],
  allowHeaders: ['X-App-Version'],
  exposeHeaders: []
});
server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.jsonBodyParser({
  mapParams: true
}));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({
  mapParams: true
}));
server.use(restify.plugins.fullResponse());

require('./routes/routes')(server);

server.listen(SERVER_PORT, function () {
  console.log("".concat(SERVER_NAME, " listening at ").concat(SERVER_PORT));
});