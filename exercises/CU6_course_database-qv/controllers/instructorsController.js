const Instructor = require("../models/instructor");

// 1. GET /: List all instructors
exports.showAllInstructor = async (req, res) => {
    try {
        const instructors = await Instructor.find();
        res.json(instructors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 2. GET /:id: Get a specific instructor by its _id
exports.showInstructorByID = async (req, res) => {
    try {
        const instructor = await Instructor.findById(req.params.id);
        if (!instructor) return res.status(404).json({ error: "Instructor not found" });
        res.json(instructor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 3. POST /: Add a new instructor
exports.addNewInstructor = async (req, res) => {
    try {
        const newInstructor = new Instructor(req.body);
        const savedInstructor = await newInstructor.save();
        res.status(201).json(savedInstructor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// 4. PUT /:id: Update a instructor by its _id
exports.updateInstructorByID = async (req, res) => {
    try {
        const updatedInstructor = await Instructor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedInstructor) return res.status(404).json({ error: "Instructor not found" });
        res.json(updatedInstructor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// 5. DELETE /:id: Delete a instructor by its _id
exports.deleteInstructorByID = async (req, res) => {
    try {
        const deletedInstructor = await Instructor.findByIdAndDelete(req.params.id);
        if (!deletedInstructor) return res.status(404).json({ error: "Instructor not found" });
        res.json({ message: "Instructor deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
