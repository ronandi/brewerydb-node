var Request = require('../../lib/request');

var Style = function(config) {
    this.config = config;
    this.idEndpoint = "style";
    this.genEndpoint = "styles"
}

Style.prototype.getById = function(id, callback) {
    this.executeRequest(this.idEndpoint + "/" + id, callback);
}

Style.prototype.all = function(callback) {
    this.executeRequest(this.genEndpoint, callback);
}

Style.prototype.executeRequest = function(endpoint, callback) {
    var styleReq = this.createRequest(endpoint, { key: config.key }, this.config);
    styleReq.makeRequest(callback);
}

Style.prototype.createRequest = function(endpoint, params, config) {
    return new Request(endpoint, params, config);
}

module.exports = Style;
