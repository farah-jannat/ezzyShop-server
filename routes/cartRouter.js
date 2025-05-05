const express = require("express");
const addtocart = require("../controllers/cart/addtocart.js");
const authenticateToken = require("../middlewares/varifytoken.js");
const addtocartdelete = require("../controllers/cart/addtocartdelete.js");
const cartlist = require("../controllers/cart/cartlist.js");
const cartcount = require("../controllers/cart/frontend/cartcount.js");
const checkuser = require("../middlewares/checkuser.js");
const updateCartQuantity = require("../controllers/cart/frontend/updateCartQuantity.js");
const router = express.Router();

router.post("/", authenticateToken, addtocart);
router.delete("/:cart_id", addtocartdelete);
router.get("/", cartlist);
router.get("/cartcount", checkuser, cartcount);
router.post("/updateqty", authenticateToken, updateCartQuantity);

module.exports = router;
