const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  addCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
} = require("../controllers/courses");

router.get("/courses", getAllCourses);
router.post("/courses", addCourse);
router.put("/courses/:id", updateCourse);
router.delete("/courses/:id", deleteCourse);
router.get("/courses/:id", getCourseById);

module.exports = router;
