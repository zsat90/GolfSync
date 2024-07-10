const express = require("express");
const router = express.Router();
const validation = require("../middleware/validation");

const { registerUser, loginUser } = require("../controllers/users");

router.post("/register", validation, registerUser);

router.post("/login", validation, loginUser);

module.exports = router;
