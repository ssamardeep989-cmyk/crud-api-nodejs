const express = require("express");

const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const validateProduct = require("../middleware/validateProduct");

// Create Product
router.post("/", validateProduct, createProduct);

// Get All Products
router.get("/", getAllProducts);

// Get Product By ID
router.get("/:id", getProductById);

// Update Product
router.put("/:id", validateProduct, updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

module.exports = router;