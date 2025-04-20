const express = require("express");
const productlist = require("../controllers/product/productlist");
const createProduct = require("../controllers/product/createProduct");
const upload = require("../middlewares/image-uploader");
const router = express.Router();

router.get("/", productlist);
router.post(
  "/",
  upload.fields([
    { name: "product_image1", maxCount: 1 },
    { name: "product_image2", maxCount: 1 },
    { name: "product_image3", maxCount: 1 },
    { name: "product_image4", maxCount: 1 },
  ]),
  createProduct
);

module.exports = router;
