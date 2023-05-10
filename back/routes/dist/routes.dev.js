"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
  server.get('/question', function (req, res, next) {
    var category = req.query.category;
    dbRequests.getQuestion(category, function (error, data) {
      // Tableau qui contiendra les réponses de la requête sql au bon format
      var formattedResponseFront = []; // Liste des id de toutes les questions récupérées par la requête sql

      var questionIds = _toConsumableArray(new Set(data.map(function (item) {
        return item.id;
      }))); // Itère sur chaque id de question


      questionIds.map(function (questionId) {
        // Pour un id de question, récupère toutes ses lignes obtenues par le sql
        var questionRows = data.filter(function (dataElement) {
          return dataElement.id === questionId;
        }); // Formate les questionRows pour avoir la tête qu'on veut

        var questionFront = {
          questionId: questionRows[0].id,
          question: questionRows[0].question_text,
          answers: []
        };
        questionRows.map(function (questionRow) {
          questionFront.answers.push({
            text: questionRow.answer_text,
            isCorrect: questionRow.is_correct == 1 ? true : false
          });
        });
        formattedResponseFront.push(questionFront);
      });
      /*
        let mock = {
          questionId: 5,
          question: "machin ?",
          answers: [
            {text: "answer 1", isCorrect: false},
            {text: "answer 2", isCorrect: false},
            {text: "answer 3", isCorrect: true},
            {text: "answer 4", isCorrect: false},
          ]
        }
      */

      error ? sendErrorResponse(res, ERROR_MSG) : res.json(HTTP_STATUS_OK, formattedResponseFront);
    });
  }); // GET

  server.get('/answer', function (req, res, next) {
    var questionId = req.query.questionId;
    dbRequests.getAnswer(questionId, function (error, data) {
      error ? sendErrorResponse(res, ERROR_MSG) : res.json(HTTP_STATUS_OK, data);
    });
  }); // GET

  server.get('/category', function (req, res, next) {
    var categoryName = req.query.name;
    dbRequests.getCategoryDetails(categoryName, function (error, data) {
      error ? sendErrorResponse(res, ERROR_MSG) : res.json(HTTP_STATUS_OK, data);
    });
  }); // GET

  server.get('/:resource', function (req, res, next) {
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

  server.post('/user', function (req, res, next) {
    var resource = req.params.resource;
    var username = req.body.username;
    var password = req.body.password;
    dbRequests.postUser(username, password, function (error, data) {
      error ? sendErrorResponse(res, ERROR_MSG) : res.json(HTTP_STATUS_OK, data);
    });
  });
};