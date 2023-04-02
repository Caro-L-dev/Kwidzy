/**
 * Package Import
 */
let mysql = require('mysql');

/**
 * Connection to the Database
 */
let connectToDb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kwidzy"
});

connectToDb.connect(function(error) {
  if (error) throw error;
  console.log("Connected!");
});

exports.getCategories = function(callback) {
  connectToDb.query("select * from category", function(error, results) {
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

// "select * from question inner join category on question.category_id = category.id where category.name = 'sport'"
