const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },

  description: {
    type: String,
  },

  location: {
    type: String,
  },

  image: {
    type: String,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
