const Variant = require("../../models/product_variant");
const deleteVariant = async (req, res) => {
  try {
    const Product = await Variant.findByIdAndDelete(req.params.id);
    res.send({
      status: "successfully delete",
      data: Product
    });
  } catch (err) {
    res
      .status(500)
      .send({ error: "An error occurred while deleting Product" });
  }
};


module.exports = deleteVariant;