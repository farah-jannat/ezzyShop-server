const address = require("../../models/address.js");
const addresslist = async (req, res) => {
  try {
    const addresslist = await address.find();
    res.send({ status: "successfully", data: addresslist });
  } catch (err) {
    console.log(`  here is errror ${err}`);
    res.send({ status: "faild", errors: err.errors });
  }
};

module.exports = addresslist;
