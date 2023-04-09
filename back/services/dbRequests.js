/**
 * Package Import
 */
let mysql = require('mysql');
require('dotenv').config();

/**
 * Connection to the Database
 */
let connectToDb = mysql.createConnection({
  port: process.env.MYSQL_ADDON_PORT,
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB
});

connectToDb.connect(function(error) {
  if (error) throw error;
  console.log("Connected!");
});

exports.getCategories = function(callback) {
  connectToDb.query("select * from categories", function(error, results) {
        if(error){    
            console.log("Error ocurred in executing the query : " + error);
        } else {
            for(let result of results) {
              console.log(result);
            }
        }
        callback(error, results);
    });
}

exports.getQuestion = function(callback) {
   connectToDb.query("select * from question", function(error, results) {
         if(error){    
             console.log("Error ocurred in executing the query : " + error);
         } else {
             for(let result of results) {
               console.log(result);
             }
         }
         callback(error, results);
     });
}

exports.getAnswer = function(callback) {
connectToDb.query("select * from answer", function(error, results) {
      if(error){    
          console.log("Error ocurred in executing the query : " + error);
      } else {
          for(let result of results) {
            console.log(result);
          }
      }
      callback(error, results);
})};

// "select * from question inner join category on question.category_id = category.id where category.name = 'sport'"
