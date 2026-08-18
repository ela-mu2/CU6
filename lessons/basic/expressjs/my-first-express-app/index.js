const express = require("express");
const app = express(); // You create a server and name it 'app'

// Middleware function
app.use((req, res, next) => {
    console.log(`Request method: ${req.method}, Request URL: ${req.url}`);
    next();
});

//          Request, Response
app.get("/", (req, res) => {
    res.send("Hello, world"); // Response SENDS "Hello, world"
});

app.get("/info", (req, res) => {
    res.send("Information page");
});

app.get("/profile", (req, res) => {
    res.send("Profile page");
});

const PORT = 5001; // Declare the port as a number
app.listen(PORT, () => {
    // Use the port
    // Console logs after the server starts listening
    console.log(`Server is running at http://localhost:${PORT}`);
});
