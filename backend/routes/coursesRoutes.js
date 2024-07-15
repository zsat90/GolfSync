const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");

router.get("/courses", getAllCourses);
router.post("/courses", addCourse);
router.put("/courses/:id", updateCourse);
router.delete("/courses/:id", deleteCourse);

module.exports = router;
