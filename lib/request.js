var request = require('request');
var qs = require('querystring');
var config = require('../config');

function Request(endpoint, params) {
    this.url = config.base_url + '/' + endpoint + '/?' + qs.stringify(params);
}

Request.prototype.makeRequest = function() {
    request(this.url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            if (data.status == "failure") {
                callback(new Error(data.errorMessage), null);
            }
            if (!data.data) { //no results, 
                callback(null, null);
            } else {
                this.data = data.data; //these are some dumb fucking names
                this.page = data.currentPage;
                this.numPages = data.numberOfPages;
                callback(null, this);
            }
        } else {
            if (error) {
                callback(error, null);
            } else {
                callback(new Error("Server returned status: " + 
                                   response.statusCode), null);
            }
        }
    });
}

Request.prototype.nextPage = function(callback) {
    this.page++;
    makeRequest(callback);
}

