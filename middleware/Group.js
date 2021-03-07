'use strict';
const tokenValidation = require('../utils/tokenValidation')
var Group = require("../controllers/Group");


module.exports.createGroup = function createGroup (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Group.createGroup(req, res);
  //});
};


module.exports.deleteGroup = function deleteGroup (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Group.deleteGroup(req, res);
  //});
};


module.exports.getGroupById = function getGroupById (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Group.getGroupById(req, res);
  //});
};


module.exports.listGroup = function listGroup (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Group.listGroup(req, res);
  //});
};


module.exports.updateGroup = function updateGroup (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Group.updateGroup(req, res);
  //});
};
