'use strict';
var index = require('../index')

var City = index.models.City;



/**
 * Get all cities
 *
 * rps Integer Size of the page results in pagination (optional)
 * rpi Integer Current page index in pagination (optional)
 * returns City
 **/
exports.listCity = function(rps,rpi,callback) {

   City.find({}, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + City.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}

