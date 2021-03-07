const bcrypt = require('bcryptjs');
const saltRounds = 10;

var AWS = require("aws-sdk");
// Set the region
AWS.config.update({
  accessKeyId: "AKIAIXMDCPFTLZQ2EWXQ",
  secretAccessKey: "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"
});

// Create S3 service object
const s3 = new AWS.S3({});

exports.hashPassword = function (users) {
  return Promise.all(users.map(async (user) => {
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(user.password, saltRounds, function (err, hash) {
        err ? reject(err) : resolve({ ...user, password: hash, isActive: true, email: user.email.toLowerCase() })
      });
    })
    return hashedPassword
  }))
}
exports.signedUrl = function(data, myBucket) {
  const signedUrlExpireSeconds = 60 * 15;
  return Promise.all(
    data.map(async oneAttachment => {
      const signedUrl = await new Promise((resolve, reject) => {
        const url = s3.getSignedUrl("getObject", {
          Bucket: myBucket,
          // TODO: needs a better handling
          Key: oneAttachment.files[0].fileName,
          Expires: signedUrlExpireSeconds
        });
        resolve(url);
      });
      return signedUrl;
    })
  );
};


exports.isCorrectPassword = function (password, user, callback) {
  bcrypt.compare(password, user.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

