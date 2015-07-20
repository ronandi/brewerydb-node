var Request = require('../request');
var Search = function(config) {
    this.config = config;
    this.genEndpoint = "search";
}

Search.prototype.all = function(params, callback) {
    params.key = this.config.key;
    this.executeRequest(this.genEndpoint, params, callback);
}

Search.prototype.beers = function(params, callback) {
    params.key = this.config.key;
    params.type = "beer";
    this.executeRequest(this.genEndpoint, params, callback);
}

Search.prototype.breweries = function(params, callback) {
    params.key = this.config.key;
    params.type = "brewery";
    this.executeRequest(this.genEndpoint, params, callback);
}

Search.prototype.guilds = function(params, callback) {
    params.key = this.config.key;
    params.type = "guild";
    this.executeRequest(this.genEndpoint, params, callback);
}

Search.prototype.events = function(params, callback) {
    params.key = this.config.key;
    params.type = "event";
    this.executeRequest(this.genEndpoint, params, callback);
}

Search.prototype.executeRequest = function(endpoint, params, callback) {
    var searchRequest = this.createRequest(endpoint, params, this.config);
    searchRequest.makeRequest(callback);
}

Search.prototype.createRequest = function(endpoint, params, config) {
    return new Request(endpoint, params, config);
}

module.exports = Search;
