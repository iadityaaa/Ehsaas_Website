const express = require("express");
const userController = require("./../controller/userController");
const authController = require("./../controller/authController");
const router = express.Router();

router.post("/login", authController.protect, userController.login);
router.post(
  "/signup",
  authController.checkJWT,
  authController.DoesUserExist,
  userController.signupcreate
);
router.patch(
  "/passwordUpdate",
  authController.checkJWT,
  userController.passwordUpdate
);
module.exports = router;
