const { default: mongoose } = require("mongoose");
const category = require("../../models/category.js");

const categorySingle = async (req, res) => {
  try {
    const categories = await category.findById(req.params.id);
    if (!categories) {
      return res.status(404).send({ errror: "categories not found" });
    }
    const parentCategory = await fetchParentCategory(categories.parentcategory);
    res.send({
      status: "successfully",
      data: categories,
      parent: parentCategory,
      slug: categories.url.replace(/-/g, " "),
    });
  } catch (err) {}
};

const fetchParentCategory = async (categoryArray) => {
  if (categoryArray[0]) {
    try {
      const categoryIds = categoryArray[0].split(",");
      const objectIdArray = categoryIds.map(
        (id) => new mongoose.Types.ObjectId(id)
      );

      const categories = await category.find({ _id: { $in: objectIdArray } });
      return categories;
    } catch (err) {}
  } else {
    return [];
  }
};

module.exports = categorySingle;
