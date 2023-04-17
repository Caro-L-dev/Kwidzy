/**
 * Package Import
 */
require('dotenv').config();
const restify = require('restify');
const mysql = require('mysql');
const corsMiddleware = require('restify-cors-middleware');
const connectToDb = require('./services/dbRequests');
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

// ----------------- test 2

// server.post('/register', (req,res, next) => {

//   const username = req.body.username
//   const password = req.body.password

//   connectToDb.query("INSERT INTO user (username, password) VALUES (?,?)", [username, password],
//   (error, result) => {
//     console.log("error : " + error);
//     console.log(result);
// })})

// ----------------- test 3


/*
server.use(restify.plugins.bodyParser());

server.post('/user', (req, res, next) => {
  console.log(req)
  const username = req.body.username;
  const password  = req.body.password;

  connectToDb.query(
    'INSERT INTO user (username, password) VALUES (?, ?)',
    [username, password],
    (error, results) => {
      if (error) {
        return next(error);
      }
      res.send({ success: true });
      next();
    }
  );
});
*/