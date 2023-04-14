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


function fetchFromTable(table, callback) {
  const query = `SELECT * FROM ${table}`;
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
exports.getQuestion = (callback) => fetchFromTable('question', callback);
exports.getAnswer = (callback) => fetchFromTable('answer', callback);

// POST
exports.postUser = (username, password, callback) => registerUser(username, password, callback);

