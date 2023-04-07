const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { verify } = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of the user is require"],
    validate: {
      validator: function (el) {
        return validator.isAlpha(el, "en-US", { ignore: " " });
      },
      message: "A name should not contain special character or digit",
    },
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Invalid Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: [validator.isStrongPassword, "Not a strong password, try again"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Confirm Password is required"],
    validate: {
      validator: function (el) {
        return el == this.password;
      },
      message: "Password didn't match",
    },
  },
  verified: {
    type: Boolean,
    default: false,
  },
  passwordChangedAt: {
    type: Date,
  },
});
userSchema.pre("save", async function (next) {
  // console.log('hi i am in befor e hashing ');
  console.log("hello 123");
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});
userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
const User = mongoose.model("User", userSchema);
module.exports = User;
