var Beer    = require('./lib/endpoints/beer');
var Brewery = require('./lib/endpoints/brewery');
var Search  = require('./lib/endpoints/search');
var Category = require('./lib/endpoints/category');
var Style = require('./lib/endpoints/style');
<<<<<<< HEAD
var Fermentables = require('./lib/endpoints/fermentables');
=======
>>>>>>> 84b37de4bace53f9a962a9f489071d9643551f11
var Config  = require('./config');

function BreweryDB(key) {
    this.config = new Config();
    this.config.key = key;
    this.beer = new Beer(this.config);
    this.breweries = new Brewery(this.config);
    this.search = new Search(this.config);
    this.style = new Style(this.config);
    this.category = new Category(this.config);
<<<<<<< HEAD
    this.fermentables = new Fermentables(this.config);
}

module.exports = BreweryDB;
=======
}

module.exports = BreweryDB;

>>>>>>> 84b37de4bace53f9a962a9f489071d9643551f11
