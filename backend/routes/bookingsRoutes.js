const express = require("express");
const router = express.Router();

const { addBooking } = require("../controllers/bookings");

router.post("/bookings", addBooking);

module.exports = router;
