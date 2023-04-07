const mongoose = require("mongoose");
const User = require("./../model/userModel");
const jwt = require("jsonwebtoken");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const crypto = require("crypto");
////creates a JWT token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode = 200, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("jwt", token, cookieOptions);
  res.status(statusCode).json({
    status: "success",
    message: "Successfully logged in",
    token,
    data: {
      user,
    },
  });
};
exports.signupcreate = catchAsync(async (req, res, next) => {
  if (req.body.Secret_Code !== process.env.Secret_Code)
    return next(new AppError("Secret code missing", 400));
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    city: req.body.city,
    verified: true,
  });
  res.status(200).json({
    status: "success",
    message: "Sign UP successfull",
  });
});
exports.login = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  createSendToken(user, 200, res);
});

exports.passwordUpdate = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ _id: req._id }).select("+password");
  const compare = await user.correctPassword(
    req.body.currentPassword,
    user.password
  );
  if (!compare) return next(new AppError("Current Password is Invalid", 400));
  if (req.body.currentPassword === req.body.password)
    return next(
      new AppError("Password should not be same as the old one", 400)
    );
  user.password = req.body.password;
  user.confirmpassword = req.body.confirmpassword;
  await user.save();
  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    message: "Your Password has been reset,Please Login again",
    url: `${req.protocol}://${req.get("host")}/api/v1/users/login`,
    token,
  });
});
