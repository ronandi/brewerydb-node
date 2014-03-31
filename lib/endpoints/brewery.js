var Brewables = require('./brewables');

var Brewery = function(config) {
    Brewables.call(this, config, "brewery", "breweries");
}
Brewery.prototype = new Brewables();

Brewery.prototype.getBeers = function(id, params, callback) {
    var brewRequest;
    if (id instanceof Array) {
        params.ids = id.toString();
        params.key = this.config.key;
        this.executeRequest(this.genEndpoint, params, callback);
    } else {
        params.key = this.config.key;
        console.log(this.idEndpoint + '/' + id + '/beers');
        this.executeRequest(this.idEndpoint + '/' + id + '/beers', params, callback);
    }
}
module.exports = Brewery;

