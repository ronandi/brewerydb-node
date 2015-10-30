var Brewables = require('./brewables');

var Fermentables = function(config) {
	Brewables.call(this, config, "fermentable", "fermentables");
}
Fermentables.prototype = new Brewables();

module.exports = Fermentables;
