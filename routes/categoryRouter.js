const express = require("express");
const routercate = express.Router();
const createCategory = require("../controllers/productCategory/createCategory.js");
const upload = require("../middlewares/image-uploader.js");

routercate.post(
  "/",
  upload.fields([{ name: "category_image", maxCount: 1 }]),
  createCategory
);
module.exports = routercate;