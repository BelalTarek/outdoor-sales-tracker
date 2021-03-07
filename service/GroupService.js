'use strict';

const Group = require('../dal/GroupDal');



exports.createGroup = function(body) {
  return new Promise(function(resolve, reject) {
   Group.createGroup(body,(err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        })
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          },
        })
      }
    })
  });
}



exports.deleteGroup = function(id) {
  return new Promise(function(resolve, reject) {
   Group.deleteGroup(id,(err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        })
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          },
        })
      }
    })
  });
}



exports.getGroupById = function(id) {
  return new Promise(function(resolve, reject) {
   Group.getGroupById(id,(err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        })
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          },
        })
      }
    })
  });
}



exports.listGroup = function() {
  return new Promise(function(resolve, reject) {
   Group.listGroup((err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        })
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          },
        })
      }
    })
  });
}



exports.updateGroup = function(body) {
  return new Promise(function(resolve, reject) {
   Group.updateGroup(body,(err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        })
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          },
        })
      }
    })
  });
}

