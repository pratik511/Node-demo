const express = require("express");
const router = express.Router();
const {
  PODUCTPOST: { VALIDATOR, APIS },
} = require("../Controller");
const { handleMultipartData } = require("../../service/multer.upload");

router.post("/", handleMultipartData, VALIDATOR.create, APIS.createProductpost);
router.get("/", APIS.getProductpost);
router.put(
  "/update/:id",
  handleMultipartData,
  VALIDATOR.update,
  APIS.updateProductpost
);
router.put("/delete/:id", VALIDATOR.toggleActive, APIS.deleteProductpost);

module.exports = router;
