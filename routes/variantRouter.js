const express = require("express");
const router = express.Router();
const createVariant = require("../controllers/productVariant/createVariant.js");

router.post(
  "/",
  upload.fields([
    { name: "product_image1", maxCount: 1 },
    { name: "product_image2", maxCount: 1 },
    { name: "product_image3", maxCount: 1 },
    { name: "product_image4", maxCount: 1 },
  ]),
  createVariant
);

module.exports = router;
