const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
require("dotenv").config();
const jwt_secret = process.env.JWT_SECRET;

// gets all users
// const getUsers = async (req, res, next) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     next(err);
//   }
// };

// registers users
const registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({ email, password });
    await user.save();

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, jwt_secret, { expiresIn: "1h" });

    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

// login user
const loginUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, jwt_secret, { expiresIn: "1h" });

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

// gets user by id

// // creates users
// const createUser = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     const user = new User({ email, password });

//     res.status(201).json(user);
//   } catch (err) {
//     next(err);
//   }
// };

// updates users

// deletes users

module.exports = { registerUser, loginUser };
