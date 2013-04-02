var request = require('request');
var BREW_SEARCH = "http://api.brewerydb.com/v2/search";

function Brewery(key) {
    this.key = key;
    this.url = BREW_SEARCH + "?key=" + key
}

Brewery.prototype.searchBeer = function(beername, callback)  {
    request(this.url + "&q=" + beername + "&type=beer&withBreweries=Y", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body).data;
            callback(null, JSON.parse(body).data);
        } else {
            console.log("ERROR");
            callback(error, null);
        }
    });
}

module.exports = Brewery;
