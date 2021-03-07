'use strict';

var utils = require('../utils/writer.js');
var Client = require('../service/ClientService');

module.exports.createClient = function createClient (req, res, next) {
  var body = req.swagger.params['body'].value;
  Client.createClient(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteClient = function deleteClient (req, res, next) {
  var id = req.swagger.params['id'].value;
  Client.deleteClient(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listClients = function listClients (req, res, next) {
  var matchingParams = req.swagger.params['matchingParams'].value;
  var rps = req.swagger.params['rps'].value;
  var rpi = req.swagger.params['rpi'].value;
  Client.listClients(matchingParams,rps,rpi)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateClient = function updateClient (req, res, next) {
  var body = req.swagger.params['body'].value;
  Client.updateClient(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
