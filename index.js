var Beer    = require('./lib/endpoints/beer');
var Brewery = require('./lib/endpoints/brewery');
var Search  = require('./lib/endpoints/search');
var Config  = require('./config');

function BreweryDB(key) {
    this.config = new Config();
    this.config.key = key;
    this.beer = new Beer(this.config);
    this.breweries = new Brewery(this.config);
    this.search = new Search(this.config);
}

module.exports = BreweryDB;

