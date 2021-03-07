'use strict';
var index = require('../index')

var User = index.models.User;



/**
 * Create a list of user
 * This can only be done by the logged in user.
 *
 * body List Create user List
 * returns List
 **/
exports.createUser = function(body,callback) {

   User.create(body, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + User.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}


/**
 * Deletes a User
 *
 * id String User id to delete
 * returns String
 **/
exports.deleteUser = function(id,callback) {

   User.deleteOne({_id: id}, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + User.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}


/**
 * Get user by user name
 *
 * id String The id that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getUserByName = function(id,callback) {

   User.findOne({_id: id}, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + User.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}


/**
 * Get All user
 *
 * rps Integer Size of the page results in pagination (optional)
 * rpi Integer Current page index in pagination (optional)
 * returns List
 **/
exports.listUsers = function(rps,rpi,callback) {

   User.find({}, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + User.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}


/**
 * ListUsers By specific Filters
 *
 * rps Integer Size of the page results in pagination (optional)
 * rpi Integer Current page index in pagination (optional)
 * matchingParams MatchingParams The params to fetch users. (optional)
 * returns List
 **/
exports.listUsersByFilters = function(rps,rpi,matchingParams,callback) {

   User.create(body, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + User.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}


/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * user User Updated user object
 * xAccessToken String user token to check if user authenticated (optional)
 * returns User
 **/
exports.updateUser = function(user,xAccessToken,callback) {

   User.updateMany({ _id:{$in: body['id']} }, body, { new: true, upsert: true, setDefaultsOnInsert: true }, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + User.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}


/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * id String id that need to be updated
 * user User Updated user object
 * returns User
 **/
exports.updateUserByName = function(id,user,callback) {

   User.findOneAndUpdate({ _id:body.id}, body, { new: true, upsert: true, setDefaultsOnInsert: true }, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + User.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}


/**
 * Logs user into the system
 * 
 *
 * user User The user email & Password for login
 * returns User
 **/
exports.userLogin = function(user,callback) {

   User.create(body, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + User.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}


/**
 * Logs out current logged in user session
 * 
 *
 * no response value expected for this operation
 **/
exports.userLogout = function(callback) {

   User.find({}, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + User.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}

