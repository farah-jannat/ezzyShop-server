const express = require("express");
const router = express.Router();
const upload = require("../middlewares/image-uploader");
const createVariant = require("../controllers/productVariant/createVariant.js");
const productVariantlist = require("../controllers/productVariant/productvariantlist.js");
const deleteVariant = require("../controllers/productVariant/deleteVariant.js");
const singleProductVarient = require("../controllers/productVariant/singleProductVariant.js");
const updateProductVariant = require("../controllers/productVariant/updateProductVariant.js");

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
router.get("/id/:id", productVariantlist);
router.delete("/:id", deleteVariant);
router.get("/:id", singleProductVarient);
router.patch(
  "/:id",
  upload.fields([
    { name: "product_image1", maxCount: 1 },
    { name: "product_image2", maxCount: 1 },
    { name: "product_image3", maxCount: 1 },
    { name: "product_image4", maxCount: 1 },
  ]),
  updateProductVariant
);

module.exports = router;
