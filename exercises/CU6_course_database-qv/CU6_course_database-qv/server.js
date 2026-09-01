const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(express.json());

// instruction: setup cors






// instruction: setup MongoDB Connection






// instruction: setup routes






app.get("/", (req, res) => {
    res.send("Good luck!");
});

// Server listening
app.listen(port, () => console.log(`Server started on port ${port}`));