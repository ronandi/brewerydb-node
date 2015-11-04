var Request = require('../../lib/request');

var Style = function(config) {
    this.config = config;
    this.idEndpoint = "style";
    this.genEndpoint = "styles"
}

Style.prototype.getById = function(id, callback) {
    this.executeRequest(this.idEndpoint + "/" + id, { key: this.config.key }, callback);
}

Style.prototype.all = function(callback) {
    this.executeRequest(this.genEndpoint,  {key: this.config.key }, callback);
}

Style.prototype.executeRequest = function(endpoint, params, callback) {
    var styleReq = this.createRequest(endpoint, params, this.config);
    styleReq.makeRequest(callback);
}

Style.prototype.createRequest = function(endpoint, params, config) {
    return new Request(endpoint, params, config);
}

module.exports = Style;
