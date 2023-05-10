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
  server.get('/question', function(req, res, next) {
    const category = req.query.category;

    dbRequests.getQuestion(category, function(error, data) {

      // Tableau qui contiendra les réponses de la requête sql au bon format
      let formattedResponseFront = [];

      // Liste des id de toutes les questions récupérées par la requête sql
      const questionIds = [...new Set(data.map(item => item.id))];

      // Itère sur chaque id de question
      questionIds.map(questionId => {

        // Pour un id de question, récupère toutes ses lignes obtenues par le sql
        let questionRows = data.filter(dataElement =>
          dataElement.id === questionId
        );

        // Formate les questionRows pour avoir la tête qu'on veut
        let questionFront = {
          questionId: questionRows[0].id,
          question: questionRows[0].question_text,
          answers: []
        };
        questionRows.map(questionRow => {
          questionFront.answers.push({
            text: questionRow.answer_text, isCorrect: (questionRow.is_correct == 1) ? true : false
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
  });

  // GET
  server.get('/answer', function(req, res, next) {
    const questionId = req.query.questionId;

    dbRequests.getAnswer(questionId, function(error, data) {
        error ? sendErrorResponse(res, ERROR_MSG) : res.json(HTTP_STATUS_OK, data);
    });
  });

  // GET
  server.get('/category', function(req, res, next) {
    const categoryName = req.query.name;

    dbRequests.getCategoryDetails(categoryName, function(error, data) {
        error ? sendErrorResponse(res, ERROR_MSG) : res.json(HTTP_STATUS_OK, data);
    });
  });

  // GET
    server.get('/:resource', function(req, res, next) {
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