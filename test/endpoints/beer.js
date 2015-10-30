var should = require('should');
var Beer = require('../../lib/endpoints/beer');

describe('Beer', function() {
    var beertest = new Beer({ key: "123" });
    it('should have a config', function() {
        should.exist(beertest.config);
    });
    it('should have a general endpoint and an id endpoint', function() {
        should.exist(beertest.idEndpoint);
        should.exist(beertest.genEndpoint);
    });
    it('should have a getById method', function() {
        should.exist(beertest.getById);
    });
    it('should have a find method', function() {
        should.exist(beertest.find);
    });
});
