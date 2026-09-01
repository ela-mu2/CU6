const express = require("express");
const app = express();
const router = require("./routes/routes");
const mathRouter = require("./routes/math");
const jsonRouter = require("./routes/json");

app.use("/", router);
app.use("/math", mathRouter);
app.use("/json", jsonRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// What is MVC?
// MVC stands for Model - View - Controller
// Today, we will learn mostly about View and Controller

// View - What is the user able to see / interact with
// Controller - Manages business logic, or in simpler terms, your code processes.
