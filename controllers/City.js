'use strict';

var utils = require('../utils/writer.js');
var City = require('../service/CityService');

module.exports.listCity = function listCity (req, res, next) {
  var rps = req.swagger.params['rps'].value;
  var rpi = req.swagger.params['rpi'].value;
  City.listCity(rps,rpi)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
