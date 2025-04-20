const Variant = require("../../models/product_variant.js");
const productVariantlist = async (req, res) => {
  try {
    const product_listing = await Variant.find({ product_id: req.params.id });
    res.send({ status: "sucessfully", data: product_listing });
  } catch (err) {
    console.log(`  here is errror ${err}`);
    res.send({ status: "faild", errors: err });
  }
};

module.exports = productVariantlist;
