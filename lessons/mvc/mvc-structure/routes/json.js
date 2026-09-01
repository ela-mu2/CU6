const express = require("express");
const router = express.Router();
const jsonController = require("../controllers/jsonController");

router.use(express.json());

router.get("/getAllCharacters", jsonController.getAllCharacters);
router.get("/getCharacter/:id", jsonController.getCharacterById);

module.exports = router;
