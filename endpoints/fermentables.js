var Brewables = require('./brewables');

var Fermentables = function(config) {
	Brewables.call(this, config, "fermentable", "fermantables");
}
Fermentables.prototype = new Brewables();

module.exports = Fermentables;