var should = require('should');
var sinon = require('sinon');
var Category = require('../../lib/endpoints/category');

describe("Category", function() {
    var cattest, stub;
    beforeEach(function() {
        cattest = new Category({ key: 123 });
        stub = sinon.stub(cattest, "executeRequest");
    });
    afterEach(function() {
        stub.restore();
    });
    it("should have a config", function() {
        should.exist(cattest.config);
    });
    it("should have a general endpoint and id endpoint", function() {
        should.exist(cattest.genEndpoint);
        should.exist(cattest.idEndpoint);
    });
    describe("getById()", function() {
        it("should contact id endpoint with id: category/id", function() {
            cattest.getById("id", null);
            stub.calledWith("category/id", { key: 123 }, null).should.be.true;
        });
    });
    describe("all()", function() {
        it("should contact general endpoint", function() {
            cattest.all(null);
            stub.calledWith("categories", { key: 123 }, null).should.be.true;
        });
    });
});
