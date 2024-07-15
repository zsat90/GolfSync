const Course = require("../models/courseModel");

//get all courses
const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    next(err);
  }
};

// create course
const addCourse = async (req, res, next) => {
  try {
    const { name, description, location } = req.body;

    const course = new Course({ name, description, location });
    await course.save();

    res.status(201).json(course);
  } catch (err) {
    next(err);
  }
};

// update course
const updateCourse = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const { name, description, location } = req.body;

    if (!name || !description || !location) {
      res.status(400).json({ message: "All fields required" });
    }

    const updatedData = { name, description, location };

    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      updatedData,
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(updatedCourse);
  } catch (err) {
    next(err);
  }
};

// delete course
const deleteCourse = async (req, res, next) => {
  try {
    const courseId = req.params.id;

    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllCourses, addCourse, updateCourse, deleteCourse };
