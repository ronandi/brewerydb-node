var should = require('should');
var rewire = require('rewire');

var Request = rewire('../lib/request');

describe('Request', function() {
    var req = new Request('test1', { param1: "val1", param2: "val2" } 
                         , { base_url: "google.com" });
    it('should have a correct url', function() {
        req.url.should.equal('google.com/test1?param1=val1&param2=val2');
    });
    describe('makeRequest', function() {
        it('should set data, page, and num pages', function() {
            var data = { blah: "balh" };
            Request.__set__("request", function(url, callback) {
                var body = { status: "success", currentPage: 1, numberOfPages: 1
                    , data: data
                }
                callback(null, { statusCode: 200 }, JSON.stringify(body));
            });
            req.makeRequest(function(err, reqdata) {
                should.not.exist(err);
                reqdata.data.should.eql(data);
                should.exist(req.numPages);
                should.exist(req.page);
                req.data.should.eql(data);
            });
        });
        it('should handle errors returned by request lib', function() {
            Request.__set__("request", function(url, callback) {
                callback(new Error("test"), null, null);
            });
            req.makeRequest(function(err, reqdata) {
                (err instanceof Error).should.be.ok;
                should.not.exist(reqdata);
            });
        });
        it('should handle errors returned by brew api', function() {
            Request.__set__("request", function(url, callback) {
                var body = { status: "failure" };
                callback(null, { statusCode: 200 }, JSON.stringify(body));
            });
            req.makeRequest(function(err, reqdata) {
                (err instanceof Error).should.be.ok;
                should.not.exist(reqdata);
            });
        });
        /*
        it('should handle no data return (but no failure)', function() {
        });
       */
    });
});

        
