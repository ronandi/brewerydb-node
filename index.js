var Beer = require('./lib/endpoints/beer');
var Config = require('./config');

function BreweryDB(key) {
    this.config = new Config();
    this.config.key = key;
    this.beer = new Beer(this.config);
}

module.exports = BreweryDB;

