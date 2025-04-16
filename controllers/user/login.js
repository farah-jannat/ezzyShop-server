const Usertable = require("../../models/usertable.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secertKey = "12345678910";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Usertable.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: "Invalid Credentials" });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).send({ message: "Password Not Match" });
      } else {
        const token = jwt.sign({ id: user.id }, secertKey, { expiresIn: "100h" });
        res.status(200).send({
          status: "succesful",
          message: "Login Succesful",
          token: token,
          user,
        });
      }
    }
    console.log("user :", user);
  } catch (err) {
    res.status(500).send({ status: "failed", errors: err });
  }
};

module.exports = login;
