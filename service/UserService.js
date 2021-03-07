'use strict';

const User = require('../dal/UserDal');



exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
   User.createUser(body,(err, data) => {
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



exports.deleteUser = function(id) {
  return new Promise(function(resolve, reject) {
   User.deleteUser(id,(err, data) => {
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



exports.getUserByName = function(id) {
  return new Promise(function(resolve, reject) {
   User.getUserByName(id,(err, data) => {
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



exports.listUsers = function(rps,rpi) {
  return new Promise(function(resolve, reject) {
   User.listUsers(rps,rpi,(err, data) => {
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



exports.listUsersByFilters = function(rps,rpi,matchingParams) {
  return new Promise(function(resolve, reject) {
   User.listUsersByFilters(rps,rpi,matchingParams,(err, data) => {
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



exports.updateUser = function(user,xAccessToken) {
  return new Promise(function(resolve, reject) {
   User.updateUser(user,xAccessToken,(err, data) => {
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



exports.updateUserByName = function(id,user) {
  return new Promise(function(resolve, reject) {
   User.updateUserByName(id,user,(err, data) => {
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



exports.userLogin = function(user) {
  return new Promise(function(resolve, reject) {
   User.userLogin(user,(err, data) => {
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



exports.userLogout = function() {
  return new Promise(function(resolve, reject) {
   User.userLogout((err, data) => {
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

