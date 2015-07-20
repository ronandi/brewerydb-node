brewerydb-node
================
##Status##
Only very recently published: should be considered **alpha**!     
This is somewhat tested, and somewhat finished. It does not completely wrap BreweryDB’s 
REST api (notably all POST/edit actions on the db are unimplemented), but it does what I need it to do right now - get data from the db. I based my interface off the one [Tyler Hunt made his wrapper written in Ruby](https://github.com/tylerhunt/brewery_db). 
 
##Installation##
You should install this library with npm:    
   
	npm install brewerydb-node
##Documentation##
###How to use###
	var BreweryDb = require('brewerydb-node');
	var brewdb = new BreweryDb('your-key-here');

Callbacks should should take two arguments, err, and data, as per convention
	
###Endpoints###
####Beer####
**beer.getById**(id/Array of ids, params (see options in BreweryDb Api docs),
callback)        

	// /beer/:beerId
	brewdb.beer.getById("avMkil", {}, callback);      

	// /beers?ids=
	brewdb.beer.getById(["avMkil", "XcvLTe"], { withBreweries: "Y" }, callback);     

	// /beers?name=“bock”&abv=....
	// can provide params that beers endpoint accepts (like abv, ibu, etc.)
	brewdb.beer.find({ name:"bock" }, callback)
	
####Brewery####
	brewdb.breweries.getById("g0jHqt", {}, callback);
	brewdb.breweries.getById(["g0jHqt", {}, "MWi5Kp"], callback)
	brewdb.breweries.find( { established: 2010 }, callback)
	
####Search####
	brewdb.search.all( { q: "coors" }, callback);
	brewdb.search.beers({ q: "dogfish" }, callback);
	brewdb.search.breweries({ q: "dogfish" }, callback);	
	
####Category####
	brewdb.category.all(callback);
	brewdb.category.getById(1, callback);
	
####Style####
	brewdb.style.all(callback);
	brewdb.style.getById(1,callback)

##Todo##
1. Write better tests?
2. Implement glassware
3. Write better docs
