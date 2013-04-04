var BreweryDB = require('./index');
var api = new BreweryDB("7ba3a56166ec88f283a107f9b8f070d8");
api.search.all({q:"Coors"}, function(err, data) { if (err) console.log(err); else console.log(data) });
