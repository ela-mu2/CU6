const express = require("express");
const app = express();

app.use((err, req, res, next) => {
    console.log(error);
    res.status(500).send("Something broke!");
});

app.get("/", (req, res, next) => {
    const err = new Error("Oh no! Something went wrong.");
    next(err);
    // res.send("Home Page")
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
