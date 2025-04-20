const { default: slugify } = require("slugify");
const Product = require("../../models/product.js");

const createProduct = async (req, res) => {
  try {
    const {
      product_name,
      product_url,
      meta_title,
      meta_keywords,
      meta_description,
      featuredproduct,
      trendingproduct,
      newarrivedproduct,
      editor,
      parent_category,
      child_category,
      sort_description,
      weight_type,
      weight,
      stock,
      mrp_price,
      selling_price,
      status,
      color,
      brand,
      size,
    } = req.body;
    console.log("this is parentcategoyr", parent_category);
    const insertProduct = new Product({
      product_name,
      sort_description,
      product_url: slugify(product_url),
      product_image1: req.files.product_image1[0].filename,
      product_image2: req.files.product_image2[0].filename,
      product_image3: req.files.product_image3[0].filename,
      product_image4: req.files.product_image4[0].filename,
      description: editor,
      size,
      color,
      brand,
      meta_title,
      newarrivedproduct,
      trendingproduct,
      featuredproduct,
      parent_category,
      child_category,
      meta_keywords,
      meta_description,
      weight_type,
      selling_price,
      mrp_price,
      stock,
      status,
      weight,
    });
    const response = await insertProduct.save();
    res.send({ status: "succesfull", data: response });
  } catch (err) {
    console.log(`  here is errror ${err}`);
    res.send({ status: "faild", errors: err });
  }
};
module.exports = createProduct;
