var should = require("should");
var sinon = require('sinon');
var Request = require('../../lib/request');
var Brewables = require('../../lib/endpoints/brewables');

describe("Brewables", function() {
    describe("getById", function() {
        var brew, stub;
        beforeEach(function() {
            brew = new Brewables({ key:"abc123" }, "beer", "beers");
            stub = sinon.stub(brew, "executeRequest");
        });
        afterEach(function() {
            stub.restore();
        });
        it("should use the id endpoint given one id", function() {
            brew.getById("id", {}, null);
            stub.calledWith("beer/id", { key:"abc123" }, null).should.be.true;
        });
        it("should use the general endpoint with the correct param given multiple ids", function() {
            brew.getById(["id1", "id2"], {}, null);
            stub.calledWith("beers", { key: "abc123", ids: "id1,id2" }, null).should.be.true;
        });
    });
    describe("find", function() {
        var brew, stub;
        beforeEach(function() {
            brew = new Brewables({ key:"abc123" }, "beer", "beers");
            stub = sinon.stub(brew, "executeRequest");
        });
        afterEach(function() {
            stub.restore();
        });
        it("should use the general endpoint", function() {
            stub.calledWith("beers", { key: "abc123" }, null);
        });
    });
});


