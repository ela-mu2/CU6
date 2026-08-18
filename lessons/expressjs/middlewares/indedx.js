const express = require("express");
const routes = require("./routes");
const app = express();

// Basic Middleware
// Application Level Middleware
app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
});
app.use("/routes", routes);
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.get("/", (req, res) => {
    console.log("Actual Response");
    res.send("Home Page Response");
});

app.get("/users", (req, res) => {
    console.log("Users page");
    res.send("Reach Users Page");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
    