const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.homePage);
router.get("/about", controller.aboutPage);

module.exports = router;
