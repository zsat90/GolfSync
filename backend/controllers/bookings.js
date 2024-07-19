const Booking = require("../models/bookingModel");

// Add booking
const addBooking = async (req, res, next) => {
  try {
    const { course, date, time } = req.body;

    const newBooking = new Booking({ course, date, time });

    await newBooking.save();

    res.status(201).json(newBooking);
  } catch (err) {
    next(err);
  }
};

module.exports = { addBooking };
