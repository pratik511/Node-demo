const express = require("express");
const router = express.Router();
const { auth } = require("../../middleware/auth");
const {
  USERPOST: { VALIDATOR, APIS },
} = require("../Controller");

router.get("/", auth({usersAllowed:['*'], isTokenRequired: true }), APIS.getUser);
router.post("/login", VALIDATOR.login, APIS.loginUser);
router.post("/signup", VALIDATOR.signup, APIS.createUserpost);

module.exports = router;
