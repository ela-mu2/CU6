const express = require("express");
const router = express.Router();

// instruction: import the instructor controller
const instructorsController = require("../models/instructorsController");

// instruction: GET /: List all instructors
router.get("/", instructorsController.showAllInstructor);

// instruction: setup GET /:id: Get a specific instructor by its _id
router.get("/:id", instructorsController.showInstructorByID);

// instruction: setup POST /: Add a new instructor
router.post("/", instructorsController.addNewInstructor);

// instruction: setup PUT /:id: Update a instructor by its _id
router.put("/:id", instructorsController.updateInstructorByID);

// instruction: setup DELETE /:id: Delete a instructor by its _id
router.delete("/:id", instructorsController.deleteInstructorByID);

// instruction: export the router
module.exports = router;
