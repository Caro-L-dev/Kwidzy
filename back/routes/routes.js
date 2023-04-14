/**
 * Local Import
 */
const dbRequests = require('../services/dbRequests');

const ERROR_MSG = "Unexpected error, maybe our services are down";
const HTTP_STATUS_OK = 200;

function sendErrorResponse(res, errorMessage) {
  res.json(500, { error: errorMessage });
}

module.exports = function(server) {

  // GET
    server.get('/:resource', function(req, res, next) {
        // Utilisé pour récupérer le nom de la ressource demandée, 
        // par exemple, "categories", "question" ou "answer".
        const resource = req.params.resource;
    
        const dbFunction = {
          categories: dbRequests.getCategories,
          question: dbRequests.getQuestion,
          answer: dbRequests.getAnswer
        }[resource];
    
        if (dbFunction) {
        dbFunction(function(error, data) {
            error ? sendErrorResponse(res, ERROR_MSG) : res.json(HTTP_STATUS_OK, data);
        });
        } else {
          sendErrorResponse(res, 'Invalid resource');
        }
    });

    /*
      // POST
      server.post('/user', function(req, res, next) {
        const resource = req.params.resource;
    
        const dbFunction = {
        user: dbRequests.postUser,
        }[resource];
    
        if (dbFunction) {
        dbFunction(function(error, data) {
            error ? sendErrorResponse(res, ERROR_MSG) : res.json(HTTP_STATUS_OK, data);
        });
        } else {
        sendErrorResponse(res, 'Invalid resource');
        }
    });
    */

    // POST
    server.post('/user', function(req, res, next) {
      const resource = req.params.resource;
      let username = req.body.username;
      let password = req.body.password;

      dbRequests.postUser(username, password, function(error, data) {
          error ? sendErrorResponse(res, ERROR_MSG) : res.json(HTTP_STATUS_OK, data);
      });
    });
};