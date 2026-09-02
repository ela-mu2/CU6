const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(express.json());

// instruction: setup cors
app.use(cors());

// instruction: setup MongoDB Connection
mongoose
    .connect("mongodb://localhost:27017/course_database")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

// instruction: setup routes
const coursesRouter = require("./routes/courses");
const instructorsRouter = require("./routes/instructors");

app.use("/courses", coursesRouter);
app.use("/instructors", instructorsRouter);
app.get("/", (req, res) => {
    res.send("Good luck!");
});

// Server listening
app.listen(port, () => console.log(`Server started on port ${port}`));
