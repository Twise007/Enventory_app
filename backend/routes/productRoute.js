const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const { createProduct, getProducts, getProduct, deleteProduct, updateProduct } = require("../controllers/productController");
const { upload } = require("../utils/fileUpload");


router.post("/", protect, upload.single("image"), createProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProduct);
router.delete("/:id", protect, deleteProduct);
router.patch("/:id", protect, upload.single("image"),updateProduct);

module.exports = router;