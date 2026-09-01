const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.use(express.urlencoded({ extended: true }));

router.get("/", controller.homePage);
router.get("/about", controller.aboutPage);

router.post("/addTwoNumbers", controller.addTwoNumbers);
router.post("/multiplyTwoNumbers", controller.multiplyTwoNumbers);

module.exports = router;
