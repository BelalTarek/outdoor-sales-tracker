'use strict';

const City = require('../dal/CityDal');



exports.listCity = function(rps,rpi) {
  return new Promise(function(resolve, reject) {
   City.listCity(rps,rpi,(err, data) => {
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

