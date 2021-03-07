'use strict';
const tokenValidation = require('../utils/tokenValidation')
var Client = require("../controllers/Client");


module.exports.createClient = function createClient (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Client.createClient(req, res);
  //});
};


module.exports.deleteClient = function deleteClient (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Client.deleteClient(req, res);
  //});
};


module.exports.listClients = function listClients (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Client.listClients(req, res);
  //});
};


module.exports.updateClient = function updateClient (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Client.updateClient(req, res);
  //});
};
