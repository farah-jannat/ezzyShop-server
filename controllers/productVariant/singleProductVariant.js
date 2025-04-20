const Variant = require("../../models/product_variant.js");
const category = require("../../models/category.js");
const mongoose = require("mongoose");

const singleProductVarient = async (req, res) => {
  try {
    const data = await Variant.findById(req.params.id);
    if (!data) {
      return res.status(404).send({ error: "product not found" });
    }
    let parentCategory = await fetchCategory(data.parent_category);
    let childCategory = await fetchCategory(data.child_category);
    res.send({
      status: "successfully",
      data,
      parentCategory,
      childCategory,
      slug: data.product_url.replace(/-/g, " "),
    });
  } catch (err) {
    res.status(500).send({ error: "An error occurred while fetching data" });
  }
};
const fetchCategory = async (categoryArray) => {
  if (categoryArray[0]) {
    try {
      const categoryIds = categoryArray[0].split(",");
      const objectIdArray = categoryIds.map(
        (id) => new mongoose.Types.ObjectId(id)
      );
      const categories = await category.find({ _id: { $in: objectIdArray } });
      return categories;
    } catch (error) {}
  } else {
    return [];
  }
};
module.exports = singleProductVarient;
