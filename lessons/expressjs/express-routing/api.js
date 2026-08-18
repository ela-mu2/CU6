const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
    res.send("User Page Route");
});

router.get("/users/:userId", (req, res) => {
    res.send(`User ID: ${req.params.userId}`);
});

module.exports = router;
