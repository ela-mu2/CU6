const express = require("express");
const router = express.Router();

// Router-level Middleware
router.use((req, res, next) => {
    console.log("Router-level middleware execution");
    next();
});

router.get("/", (req, res) => {
    res.send("Router-level route");
});

module.exports = router;
