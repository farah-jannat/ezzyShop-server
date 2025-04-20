const { default: mongoose } = require("mongoose");
const Product = require("../../models/product.js");
const category = require("../../models/category.js");

const singleProduct = async (req, res) => {
  try {
    const productDetails = await Product.findById(req.params.id);
    // console.log("this is child category id:", productDeatails.child_category);
    if (!productDetails) {
      return res.status(404).send({ error: "product not found" });
    }
    let parentcategory = await fetchCategory(productDetails.parent_category);
    let childcategory = await fetchCategory(productDetails.child_category);
    console.log("child category", childcategory);
    res.send({
      status: "successfully",
      productDetails,
      parentcategory,
      childcategory,
      slug: productDetails.product_url.replace(/-/g, " "),
    });
  } catch (err) {
    console.log(`here is error ${err}`);
    res
      .status(500)
      .send({ message: "An error occurred while fetching data", error: err });
  }
};

const fetchCategory = async (categoryArray) => {
  if (categoryArray) {
    try {
      const categoryIds = categoryArray[0].split(",");
      const objetIdArray = categoryIds.map(
        (id) => new mongoose.Types.ObjectId(id)
      );
      const categories = await category.find({ _id: { $in: objetIdArray } });
      console.log("this is childcaterory form fecth", categories);
      return categories;
    } catch (err) {}
  } else {
    return [];
  }
};

module.exports = singleProduct;
