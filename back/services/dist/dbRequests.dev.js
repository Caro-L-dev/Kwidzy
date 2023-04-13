"use strict";

/**
 * Package Import
 */
var mysql = require('mysql');

require('dotenv').config();
/**
 * Connection to the Database
 */


var connectToDb = mysql.createConnection({
  port: process.env.MYSQL_ADDON_PORT,
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB
});
connectToDb.connect(function (error) {
  if (error) throw error;
  console.log("Datas are linked to front, you're connected!");
});

function fetchFromTable(table, callback) {
  var query = "SELECT * FROM ".concat(table);
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

; // GET

exports.getCategories = function (callback) {
  return fetchFromTable('categories', callback);
};

exports.getQuestion = function (callback) {
  return fetchFromTable('question', callback);
};

exports.getAnswer = function (callback) {
  return fetchFromTable('answer', callback);
}; // POST wip


exports.postRegister = function (callback) {
  connectToDb.query("INSERT INTO user (username, password) VALUES (?;?)", [username, password], function (error, result) {
    console.log(error);
  });
};