/**
 * Local Import
 */
var dbRequests = require('../services/dbRequests');

module.exports = function(server) {

    server.get('/', function (req, res, next) {
        dbRequests.getCategories(function (error, categories) {
            if (error) {
                return res.json(500, {error: "Unexpected error, maybe our services are down."});
            } else {
                return res.json(200, categories);
            }
        });
    });
};