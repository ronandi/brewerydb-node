var should = require('should');
var sinon = require('sinon');
var Search = require('../../lib/endpoints/search');

describe('Search', function() {
    var searchtest = new Search({ key: "123" });
    it("should have a config", function() {
        should.exist(searchtest.config);
    });
    it("should have a general endpoint", function() {
        should.exist(searchtest.genEndpoint);
    });
    describe("subtype search methods", function() {
        var search;
        var stub;
        beforeEach(function() {
            search = new Search({ key:"abc123" });
            stub = sinon.stub(search, "executeRequest");
        });
        describe("all()", function() {
            it("should make a request on 'search'", function() {
                search.all({ q: "Coors" }, null);
                stub.calledWith("search", { key: "abc123", q: "Coors"});
            });
        });
        describe("beers()", function() {
            it("should have a type param set to 'beer'", function() {
                search.beers({ q: "Coors" }, null);
                stub.calledWith("search", { key: "abc123", q: "Coors", type: "beer"});
            });
        });
        describe("breweries()", function() {
            it("should have a type param set to 'brewery'", function() {
                search.breweries({ q: "Coors" }, null);
                stub.calledWith("search", { key: "abc123", q: "Coors", type: "brewery"});
            });
        });
        describe("guilds()", function() {
            it("should have a type param set to 'guild'", function() {
                search.guilds({ q: "Coors" }, null);
                stub.calledWith("search", { key: "abc123", q: "Coors", type: "guild"});
            });
        });
        describe("events()", function() {
            it("should have a type param set to 'event'", function() {
                search.events({ q: "Coors" }, null);
                stub.calledWith("search", { key: "abc123", q: "Coors", type: "event"});
            });
        });
    });
});

