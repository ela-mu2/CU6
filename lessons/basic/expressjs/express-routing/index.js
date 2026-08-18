const express = require("express");
const api = require("./api");
const app = express();

app.get("/", (req, res) => {
    res.send("Home Page Route");
});

// Normal routing
// Users route
// app.get('/users', (req, res) => {
//     res.send(`Reach users route`)
// })

// // Routes with parameters
// app.get('/users/:userId', (req, res) => {
//     res.send(`User ID: ${req.params.userId}`)
// })

app.use("/api", api);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
