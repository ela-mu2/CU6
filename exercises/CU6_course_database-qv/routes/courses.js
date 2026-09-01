const express = require("express");
const router = express.Router();

// instruction: import the course model
const coursesController = require("../models/coursesController");

/* 
    instruction: 
    - setup GET /: List all courses (utilize populate() to bring in instructor details)
*/
router.get("/", coursesController.showAllCourses);

// instruction: setup GET /:id: Retrieve details of a specific course by its _id (use populate() for instructor details)
router.get("/:id", coursesController.showCourseByID);

// instruction: setup POST /: Add a new course
router.post("/", coursesController.addNewCourse);

// instruction: setup PUT /:id: Modify details of a course by its _id
router.put("/:id", coursesController.updateCourseByID);

// instruction: setup DELETE /:id: Remove a course by its `_id`
router.delete("/:id", coursesController.deleteCourseByID);

// instruction: export the router
module.exports = router;
