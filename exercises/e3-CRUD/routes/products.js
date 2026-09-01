const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.use(express.json());

router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProductById);
router.post("/", productsController.addNewProduct);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
