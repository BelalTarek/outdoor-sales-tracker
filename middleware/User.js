'use strict';
const tokenValidation = require('../utils/tokenValidation')
var User = require("../controllers/User");


module.exports.createUser = function createUser (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  User.createUser(req, res);
  //});
};


module.exports.deleteUser = function deleteUser (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  User.deleteUser(req, res);
  //});
};


module.exports.getUserByName = function getUserByName (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  User.getUserByName(req, res);
  //});
};


module.exports.listUsers = function listUsers (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  User.listUsers(req, res);
  //});
};


module.exports.listUsersByFilters = function listUsersByFilters (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  User.listUsersByFilters(req, res);
  //});
};


module.exports.updateUser = function updateUser (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  User.updateUser(req, res);
  //});
};


module.exports.updateUserByName = function updateUserByName (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  User.updateUserByName(req, res);
  //});
};


module.exports.userLogin = function userLogin (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  User.userLogin(req, res);
  //});
};


module.exports.userLogout = function userLogout (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  User.userLogout(req, res);
  //});
};
