var should = require('should');
var Fermentables = require('../../lib/endpoints/fermentables');

describe('fermentables', function() {
    var fermentablestest = new Fermentables({ key: "123" });
    it('should have a config', function() {
        should.exist(fermentablestest.config);
    });
    it('should have a general endpoint and an id endpoint', function() {
        should.exist(fermentablestest.idEndpoint);
        should.exist(fermentablestest.genEndpoint);
    });
    it('should have a getById method', function() {
        should.exist(fermentablestest.getById);
    });
    it('should have a find method', function() {
        should.exist(fermentablestest.find);
    });
});
