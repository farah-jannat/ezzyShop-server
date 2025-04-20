const Product = require("../../models/product.js");

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send({
      status: "successfully deleted",
      deleted_prodcuct: deletedProduct,
    });
  } catch (err) {
    res
      .status(500)
      .send({ error: "an error occured while deleting this product" });
  }
};
module.exports = deleteProduct;
