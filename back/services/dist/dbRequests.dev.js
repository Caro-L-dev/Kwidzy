"use strict";

/**
 * Package Import
 */
var mysql = require('mysql');
/**
 * Connection to the Database
 */


console.log("mysql port : " + process.env.MYSQL_ADDON_PORT);
var connectToDb = mysql.createConnection({
  port: process.env.MYSQL_ADDON_PORT,
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB
});
connectToDb.connect(function (error) {
  if (error) throw error;
  console.log("Connected!");
});

function makeSqlRequest(callback, query) {
  connectToDb.query(query, function (error, results) {
    if (error) {
      console.log("Error occurred in executing the query for ".concat(table, ": ").concat(error));
    } else {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var result = _step.value;
          console.log(result);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    callback(error, results);
  });
}

function fetchFromTable(table, callback) {
  var query = "SELECT * FROM ".concat(table);
  makeSqlRequest(callback, query);
}

;

function getCategoryDetails(category, callback) {
  var query = "select * from categories where name='".concat(category, "'");
  makeSqlRequest(callback, query);
}

;

function getCategoryQuestions(category, callback) {
  var query = "SELECT q.id, q.question_text, a.is_correct, a.answer_text\n  FROM question q \n  INNER JOIN categories c on q.categories_id=c.id\n  INNER JOIN answer a on q.id=a.question_id\n  WHERE c.name='".concat(category, "'");
  makeSqlRequest(callback, query);
}

;

function getQuestionAnswers(questionId, callback) {
  var query = "SELECT * FROM answer where question_id=".concat(questionId);
  makeSqlRequest(callback, query);
}

;

function registerUser(username, password, callback) {
  connectToDb.query('INSERT INTO user (username, password) VALUES (?, ?)', [username, password], function (error, results) {
    callback(error, results);
  });
} // GET


exports.getCategories = function (callback) {
  return fetchFromTable('categories', callback);
};

exports.getCategoryDetails = function (category, callback) {
  return getCategoryDetails(category, callback);
};

exports.getQuestion = function (category, callback) {
  return getCategoryQuestions(category, callback);
};

exports.getAnswer = function (questionId, callback) {
  return getQuestionAnswers(questionId, callback);
}; // POST


exports.postUser = function (username, password, callback) {
  return registerUser(username, password, callback);
};