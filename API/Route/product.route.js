const express = require("express");
const router = express.Router();
const {
  PODUCTPOST: { VALIDATOR, APIS },
} = require("../Controller");

router.post("/", VALIDATOR.create, APIS.createProductpost);
router.get("/", APIS.getProductpost);
router.put("/update/:id", VALIDATOR.update, APIS.updateProductpost);
router.put("/delete/:id", VALIDATOR.toggleActive, APIS.deleteProductpost);

module.exports = router;
