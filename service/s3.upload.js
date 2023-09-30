const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
require("dotenv").config();

aws.config.update({
  secretAccessKey: process.env.SECRET_KEY,
  accessKeyId: process.env.ACCESSKEYID,
  region: process.env.REGION,
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.originalname });
    },
    key: function (req, file, cb) {
      cb(
        null,
        "DESIGN_CREATION/" +
          "design_creation" +
          "-" +
          Date.now().toString() +
          Date.now().toString() +
          Math.floor(Math.random() * 1000) +
          "." +
          file.mimetype.split("/")[1]
      );
    },
  }),

  limits: { fileSize: 1024 * 1024 * 20, files: 100 },
});

module.exports = { upload };
