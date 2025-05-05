const express = require("express");
const addtocart = require("../controllers/cart/addtocart.js");
const authenticateToken = require("../middlewares/varifytoken.js");
const addtocartdelete = require("../controllers/cart/addtocartdelete.js");
const router = express.Router();

router.post("/", authenticateToken, addtocart);
router.delete("/:cart_id", addtocartdelete);

module.exports = router;
