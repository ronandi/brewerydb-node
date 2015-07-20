var Brewables = require('./brewables');

var Beer = function(config) {
    Brewables.call(this, config, "beer", "beers");
}
Beer.prototype = new Brewables();

module.exports = Beer;

