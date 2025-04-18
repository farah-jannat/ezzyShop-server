const express = require("express");
const routercate = express.Router();
const createCategory = require("../controllers/productCategory/createCategory.js");
const categorylist = require("../controllers/productCategory/categorylist.js");
const upload = require("../middlewares/image-uploader.js");
const categorylistLevelOne = require("../controllers/productCategory/categorylist_level_one.js");
const categorySingle = require("../controllers/productCategory/categorySingle.js");
const deleteCategory = require("../controllers/productCategory/deleteCategory.js");
const updatedCategory = require("../controllers/productCategory/updateCategory.js");

routercate.post(
  "/",
  upload.fields([{ name: "category_image", maxCount: 1 }]),
  createCategory
);
routercate.get("/", categorylist);
routercate.get("/levelone", categorylistLevelOne);
routercate.get("/:id", categorySingle);
routercate.delete("/:id", deleteCategory);
routercate.patch(
  "/:id",
  upload.fields([{ name: "category_image", maxCount: 1 }]),
  updatedCategory
);
module.exports = routercate;
