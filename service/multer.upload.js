const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"), // cb -> callback
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 20, files: 100},
}).single("image");


module.exports = { handleMultipartData };