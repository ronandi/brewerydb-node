var Request = require('../request');
var Brewables = function(config, idEndpoint, genEndpoint) {
    this.config = config;
    this.idEndpoint = idEndpoint;
    this.genEndpoint = genEndpoint;
}

Brewables.prototype.getById = function(id, params, callback) {
    var brewRequest;
    if (id instanceof Array) {
        params.ids = id;
        params.key = this.config.key;
        brewRequest = new Request(this.genEndpoint, params);
    } else {
        params.key = this.config.key;
        beerRequest = new Request(this.idEndpoint + '/' + id, params, this.config);
    }
    beerRequest.makeRequest(callback);
}

Brewables.prototype.getByName = function(name, params, callback) {
    params.key = this.config.key;
    params.name = name;
    var brewRequest = new Request(this.genEndpoint, params, this.config);
    brewRequest.makeRequest(callback);
}

module.exports = Brewables;
