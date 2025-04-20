const category = require("../../models/category");

const frontend_category_list = async (req, res) => {
  try {
    const categories = await category.find({ status: "Active" });
    console.log("categories:", categories)
    const mainCategories = [];
    const categoriesMap = new Map();

    categories.forEach((cat) => {
      categoriesMap.set(cat._id.toString(), { ...cat._doc, subcategories: [] });
    });
    console.log("categoriesmap :", categoriesMap)
    categories.forEach((cat) => {
      if (cat.perentcategory.length == 0) {
        mainCategories.push(categoriesMap.get(cat._id.toString()));
      } else {
        const parent_category = categoriesMap.get(
          cat.parentcategory[0].toString()
        );
        if (parent_category) {
          parent_category.subcategories.push(cat);
        }
      }
    });
    res.status(200).json({ status: "success", data: mainCategories });
  } catch (err) {
    res.status(500).json({ status: "failed", error: err.message });
  }
};

module.exports = frontend_category_list;
