var Brewables = require('./brewables');

var Brewery = function(config) {
    Brewables.call(this, config, "brewery", "breweries");
}
Brewery.prototype = new Brewables();

module.exports = Brewery;

