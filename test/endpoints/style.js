var sinon = require('sinon');
var should = require('should');
var Style = require('../../lib/endpoints/style');
var Request = require('../../lib/request');

describe("Style", function() {
    var styletest, stub;
    beforeEach(function() {
        styletest = new Style({ key: 123 });
        stub = sinon.stub(styletest, "executeRequest");
    });
    afterEach(function() {
        stub.restore
    });
    it("should have a config", function() {
        should.exist(styletest.config);
    });
    it("should have gen and id endpoints", function() {
        should.exist(styletest.idEndpoint);
        should.exist(styletest.genEndpoint);
    });
    describe("getById()", function() {
        it("should contact endpoint style/id", function() {
            styletest.getById("id", null);
            stub.calledWith("style/id", { key: 123 }, null);
        });
    });
    describe("all()", function() {
        it("should contanct endpoint styles", function() {
            styletest.all(null);
            stub.calledWith("styles", { key: 123 }, null);
        });
    });
});

