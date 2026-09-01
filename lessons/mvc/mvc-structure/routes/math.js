const express = require("express");
const router = express.Router();
const mathController = require("../controllers/mathController");

router.use(express.json());

router.post("/addAllNumbers", mathController.addAllNumbers);
router.post("/multiplyAllNumbers", mathController.multiplyAllNumbers);

module.exports = router;
