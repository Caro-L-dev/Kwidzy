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

exports.getCategories = function (callback) {
  connectToDb.query("select * from categories", function (error, results) {
    if (error) {
      console.log("Error ocurred in executing the query : " + error);
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
};

exports.getQuestion = function (callback) {
  connectToDb.query("select * from question", function (error, results) {
    if (error) {
      console.log("Error ocurred in executing the query : " + error);
    } else {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = results[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var result = _step2.value;
          console.log(result);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }

    callback(error, results);
  });
};

exports.getAnswer = function (callback) {
  connectToDb.query("select * from answer", function (error, results) {
    if (error) {
      console.log("Error ocurred in executing the query : " + error);
    } else {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = results[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var result = _step3.value;
          console.log(result);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    callback(error, results);
  });
};

exports.postRegister = function (callback) {
  connectToDb.query("INSERT INTO user (username, password) VALUES (?;?)", [username, password], function (error, result) {
    console.log(error);
  });
};