var Request = require('../request');
var Search = function(config) {
    this.config = config;
    this.genEndpoint = "search";
}

Search.prototype.all = function(params, callback) {
    params.key = this.config.key;
    var searchReq = new Request(this.genEndpoint, params, this.config);
    searchReq.makeRequest(callback);
}

module.exports = Search;
