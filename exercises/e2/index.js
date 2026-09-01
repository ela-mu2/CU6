const express = require("express");
const app = express();

const jsonRouter = require("./routes/json");

app.use(express.json());

app.use("/json", jsonRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Bookstore app is running on port http://localhost:${PORT}`);
});
