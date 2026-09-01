const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
    .connect("mongodb://localhost:27017/advanced-mongoose")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
