'use strict';
var index = require('../index')

var Client = index.models.Client;



/**
 *
 * body List Create New Clients
 * returns List
 **/
exports.createClient = function(body,callback) {

   Client.create(body, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + Client.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}


/**
 * Delete purchase Client by ID
 *
 * id String ID of the Client that needs to be deleted
 * returns String
 **/
exports.deleteClient = function(id,callback) {

   Client.deleteOne({_id: id}, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + Client.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}


/**
 *
 * matchingParams Object Dates and others (optional)
 * rps Integer Size of the page results in pagination (optional)
 * rpi Integer Current page index in pagination (optional)
 * returns List
 **/
exports.listClients = function(matchingParams,rps,rpi,callback) {

   Client.create(body, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + Client.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}


/**
 * Updated vlient
 *
 * body Client Updated applicant object
 * returns Client
 **/
exports.updateClient = function(body,callback) {

   Client.updateMany({ _id:{$in: body['id']} }, body, { new: true, upsert: true, setDefaultsOnInsert: true }, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + Client.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}

