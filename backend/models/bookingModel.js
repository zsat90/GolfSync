const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  course: {
    type: String,
    required: [true, "Course required"],
  },

  date: {
    type: Date,
    required: [true, "Date required"],
  },

  time: {
    type: String,
    required: [true, "Time required"],
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
