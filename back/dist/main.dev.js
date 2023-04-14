"use strict";

/**
 * Package Import
 */
var restify = require('restify');

var mysql = require('mysql');

var corsMiddleware = require('restify-cors-middleware');

var connectToDb = require('./services/dbRequests');
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
}); // ----------------- test 2
// server.post('/register', (req,res, next) => {
//   const username = req.body.username
//   const password = req.body.password
//   connectToDb.query("INSERT INTO user (username, password) VALUES (?,?)", [username, password],
//   (error, result) => {
//     console.log("error : " + error);
//     console.log(result);
// })})
// ----------------- test 3

server.use(restify.plugins.bodyParser());
server.post('/user', function (req, res, next) {
  console.log(req);
  var username = req.body.username;
  var password = req.body.password;
  connectToDb.query('INSERT INTO user (username, password) VALUES (?, ?)', [username, password], function (error, results) {
    if (error) {
      return next(error);
    }

    res.send({
      success: true
    });
    next();
  });
});