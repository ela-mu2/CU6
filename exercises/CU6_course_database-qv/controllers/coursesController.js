const Course = require("../models/course");

// 1. GET /: List all courses (with populate)
exports.showAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate("instructor");
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 2. GET /:id: Retrieve details of a specific course by its _id
exports.showCourseByID = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate("instructor");
        if (!course) return res.status(404).json({ error: "Course not found" });
        res.json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 3. POST /: Add a new course
exports.addNewCourse = async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// 4. PUT /:id: Modify details of a course by its _id
exports.updateCourseByID = async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedCourse) return res.status(404).json({ error: "Course not found" });
        res.json(updatedCourse);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// 5. DELETE /:id: Remove a course by its _id
exports.deleteCourseByID = async (req, res) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) return res.status(404).json({ error: "Course not found" });
        res.json({ message: "Course deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
