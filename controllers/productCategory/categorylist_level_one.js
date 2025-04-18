const category = require("../../models/category.js");

const categorylistLevelOne = async (req, res) => {
  try {
    const categories = await category.find({ parentcategory: [] });
    res.send({ status: "succesfully", data: categories });
  } catch (err) {
    res.send({ status: "failed", error: err });
  }
};

module.exports = categorylistLevelOne;
