const category = require("../../models/category.js");

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await category.findByIdAndDelete(req.params.id);
    res.send({ status: "succesfullyl deleted", deletedData: deletedCategory });
  } catch (err) {
    res
      .status(500)
      .send({ error: "An error occured while deleting this category" });
  }
};
module.exports = deleteCategory;
