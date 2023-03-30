<<<<<<< HEAD
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { attachCookiesToResponse, createTokenUser } = require("../utils");

const ifAccountExist = async (req, res) => {
=======
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { attachCookiesToResponse, createTokenUser } = require('../utils');

const ifAccountExist = async(req, res) =>{
>>>>>>> huy.back_end
  const { email } = req.body;
  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
<<<<<<< HEAD
    throw new CustomError.BadRequestError("Email already exists");
  }
  res.status(StatusCodes.OK).json({ exist: true, msg: "Email is not exist" });
};

const register = async (req, res) => {
  const { email, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists");
=======
    throw new CustomError.BadRequestError('Email already exists');
  }
  res.status(StatusCodes.OK).json({exist: true, msg: "Email is not exist"})
}

const register = async (req, res) => {
  const { email, name, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
>>>>>>> huy.back_end
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
<<<<<<< HEAD
  const role = isFirstAccount ? "admin" : "user";

  const user = await User.create({ email, password, role });
=======
  const role = isFirstAccount ? 'admin' : 'user';

  const user = await User.create({ name, email, password, role });
>>>>>>> huy.back_end
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
<<<<<<< HEAD
    throw new CustomError.BadRequestError("Please provide email and password");
=======
    throw new CustomError.BadRequestError('Please provide email and password');
>>>>>>> huy.back_end
  }
  const user = await User.findOne({ email });

  if (!user) {
<<<<<<< HEAD
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
=======
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
>>>>>>> huy.back_end
  }
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};
const logout = async (req, res) => {
<<<<<<< HEAD
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
=======
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
>>>>>>> huy.back_end
};

module.exports = {
  register,
  login,
  logout,
  ifAccountExist,
};
