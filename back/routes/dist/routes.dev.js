"use strict";

/**
 * Local Import
 */
var dbRequests = require('../services/dbRequests');

var ERROR_MSG = "Unexpected error, maybe our services are down";
var HTTP_STATUS_OK = 200;

function sendErrorResponse(res, errorMessage) {
  res.json(500, {
    error: errorMessage
  });
}

module.exports = function (server) {
  // GET
  server.get('/:resource', function (req, res, next) {
    // Utilisé pour récupérer le nom de la ressource demandée, 
    // par exemple, "categories", "question" ou "answer".
    var resource = req.params.resource;
    var dbFunction = {
      categories: dbRequests.getCategories,
      question: dbRequests.getQuestion,
      answer: dbRequests.getAnswer
    }[resource];

    if (dbFunction) {
      dbFunction(function (error, data) {
        error ? sendErrorResponse(res, ERROR_MSG) : res.json(HTTP_STATUS_OK, data);
      });
    } else {
      sendErrorResponse(res, 'Invalid resource');
    }
  }); // POST

  server.post('/:resource', function (req, res, next) {
    var resource = req.params.resource;
    var dbFunction = {
      user: dbRequests.postUser
    }[resource];

    if (dbFunction) {
      dbFunction(function (error, data) {
        error ? sendErrorResponse(res, ERROR_MSG) : res.json(HTTP_STATUS_OK, data);
      });
    } else {
      sendErrorResponse(res, 'Invalid resource');
    }
  });
};