/**
 * Package Import
 */
const mysql = require('mysql');

/**
 * Connection to the Database
 */

console.log("mysql port : " + process.env.MYSQL_ADDON_PORT);

const connectToDb = mysql.createConnection({
  port: process.env.MYSQL_ADDON_PORT,
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB
});

connectToDb.connect(function(error) {
  if (error) throw error;
  console.log("Datas are linked to front, you're connected!");
});

function makeSqlRequest(callback, query) {
  connectToDb.query(query, function(error, results) {
    if (error) {
      console.log(`Error occurred in executing the query for ${table}: ${error}`);
    } else {
      for (let result of results) {
        console.log(result);
      }
    }
    callback(error, results);
  });
}

function fetchFromTable(table, callback) {
  const query = `SELECT * FROM ${table}`;
  makeSqlRequest(callback, query);
};

function getCategoryDetails(category, callback) {
  const query = `select * from categories where name='${category}'`;
  makeSqlRequest(callback, query);
};

function getCategoryQuestions(category, callback) {
  const query = `SELECT q.id, q.question_text, a.is_correct, a.answer_text
  FROM question q 
  INNER JOIN categories c on q.categories_id=c.id
  INNER JOIN answer a on q.id=a.question_id
  WHERE c.name='${category}'`;
  makeSqlRequest(callback, query);
};

function getQuestionAnswers(questionId, callback) {
  const query = `SELECT * FROM answer where question_id=${questionId}`;
  makeSqlRequest(callback, query);
};

function registerUser(username, password, callback) {
  connectToDb.query(
    'INSERT INTO user (username, password) VALUES (?, ?)',
    [username, password],
    (error, results) => {
      callback(error, results);
    }
  );
}

// GET
exports.getCategories = (callback) => fetchFromTable('categories', callback);
exports.getCategoryDetails = (category, callback) => getCategoryDetails(category, callback);
exports.getQuestion = (category, callback) => getCategoryQuestions(category, callback);
exports.getAnswer = (questionId, callback) => getQuestionAnswers(questionId, callback);

// POST
exports.postUser = (username, password, callback) => registerUser(username, password, callback);

