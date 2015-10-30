var Request = require('../request');

var Brewables = function(config, idEndpoint, genEndpoint) {
    this.config = config;
    this.idEndpoint = idEndpoint;
    this.genEndpoint = genEndpoint;
}

Brewables.prototype.getById = function(id, params, callback) {
    var brewRequest;
    if (id instanceof Array) {
        params.ids = id.toString();
        params.key = this.config.key;
        this.executeRequest(this.genEndpoint, params, callback);
    } else {
        params.key = this.config.key;
        this.executeRequest(this.idEndpoint + '/' + id, params, callback);
    }
}

Brewables.prototype.find = function(params, callback) {
    params.key = this.config.key;
    this.executeRequest(this.genEndpoint, params, callback);
}

Brewables.prototype.executeRequest = function(endpoint, params, callback) {
    var brewRequest = this.createRequest(endpoint, params, this.config);
    brewRequest.makeRequest(callback);
}

Brewables.prototype.createRequest = function(endpoint, params, config) {
    return new Request(endpoint, params, config);
}

module.exports = Brewables;
