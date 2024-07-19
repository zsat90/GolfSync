const express = require("express");
const router = express.Router();
const validation = require("../middleware/validation");

const { registerUser, loginUser } = require("../controllers/users");

router.post("/users/register", validation, registerUser);

router.post("/users/login", loginUser);

module.exports = router;
