const express = require("express");
const router = express.Router();
const controller = require("../controllers/jsonController");

router.use(express.json());

router.get("/books", controller.getAllBooks);
router.get("/books/:id", controller.getBookById);

router.get("/reviews", controller.getAllReviews);
router.get("/reviews/:id", controller.getReviewById);

router.get("/authors", controller.getAllAuthors);
router.get("/authors/:id", controller.getAuthorById);

module.exports = router;
