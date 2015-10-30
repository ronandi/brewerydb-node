var request = require('request');
var qs = require('querystring');
var cfg = require('../config');

function Request(endpoint, params, config) {
    config = config || cfg;
    this.endpoint = endpoint;
    this.params = params;
    this.config = config;
}

Request.prototype.makeRequest = function(callback) {
    this.url = this.config.base_url + '/' + this.endpoint + '?' + qs.stringify(this.params);
    var currentRequestObj = this;
    request(this.url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            if (data.status == "failure") {
                callback(new Error(data.errorMessage), null);
<<<<<<< HEAD
            } else if (!data.data) { //no results,
=======
            } else if (!data.data) { //no results, 
>>>>>>> 84b37de4bace53f9a962a9f489071d9643551f11
                callback(null, null, currentRequestObj);
            } else {
                currentRequestObj.data = data.data; //these are some dumb fucking names
                currentRequestObj.page = data.currentPage;
                currentRequestObj.numPages = data.numberOfPages;
                callback(null, currentRequestObj.data, currentRequestObj);
            }
        } else {
            if (error) {
                callback(error, null, null);
            } else {
<<<<<<< HEAD
                callback(new Error("Server returned status: " +
=======
                callback(new Error("Server returned status: " + 
>>>>>>> 84b37de4bace53f9a962a9f489071d9643551f11
                                   response.statusCode), null, null);
            }
        }
    });
}

Request.prototype.nextPage = function(callback) {
    this.page++;
    makeRequest(callback);
}

module.exports = Request;
<<<<<<< HEAD
=======

>>>>>>> 84b37de4bace53f9a962a9f489071d9643551f11
