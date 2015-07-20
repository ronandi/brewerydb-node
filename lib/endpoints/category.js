var Request = require('../../lib/request');

var Category = function(config) {
    this.config = config;
    this.genEndpoint = "categories";
    this.idEndpoint = "category";
}

Category.prototype.all = function(callback) {
    this.executeRequest(this.genEndpoint, { key: this.config.key }, callback);
}

Category.prototype.getById = function(id, callback) {
    this.executeRequest(this.idEndpoint + '/' + id, { key: this.config.key }, callback);
}

Category.prototype.executeRequest = function(endpoint, params, callback) {
    var catRequest = this.createRequest(endpoint, params, this.config);
    catRequest.makeRequest(callback);
}

Category.prototype.createRequest = function(endpoint, params, config) {
    return new Request(endpoint, params, config);
}

module.exports = Category;
