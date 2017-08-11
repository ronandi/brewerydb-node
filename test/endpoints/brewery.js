var should = require('should');
var Brewery = require('../../lib/endpoints/brewery');

describe('brewery', function() {
    var brewerytest = new Brewery({ key: "123" });
    it('should have a config', function() {
        should.exist(brewerytest.config);
    });
    it('should have a general endpoint and an id endpoint', function() {
        should.exist(brewerytest.idEndpoint);
        should.exist(brewerytest.genEndpoint);
    });
    it('should have a getById method', function() {
        should.exist(brewerytest.getById);
    });
    it('should have a find method', function() {
        should.exist(brewerytest.find);
    });
});
