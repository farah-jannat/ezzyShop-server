const category = require("../../models/category");

const categorylist = async (req, res) => {
  try {
    const categories = await category.find().sort({ createdAt: -1 });
    res.send({ status: "succesfull", data: categories });
  } catch (err) {
    console.log(`here is category error ${err}`);
    res.send({ status: "failed", error: err });
  }
};

module.exports = categorylist;
