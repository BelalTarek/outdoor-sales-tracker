'use strict';
const tokenValidation = require('../utils/tokenValidation')
var City = require("../controllers/City");


module.exports.listCity = function listCity (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  City.listCity(req, res);
  //});
};
