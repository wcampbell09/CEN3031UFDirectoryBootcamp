'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');
    var data = fs.readFileSync("./listings.json");
    var myList = JSON.parse(data);
/* Connect to your database */
mongoose.connect('mongodb://wcamp:1234@ds127034.mlab.com:27034/ufdirectory');
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

   for(var i = 0; i < myList.entries.length; i++){
     var entry = myList.entries[i];
     entry["created_at"] = null;
     entry["updated_at"] = null;
     var listModel = new Listing(entry);
     listModel.save(function(err){
       if(err) return handleError(err);
     });
   }

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
