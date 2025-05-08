const express = require("express");
const createorder = require("../controllers/order/create_order.js");
const authenticateToken = require("../middlewares/varifytoken.js");
const orderlist = require("../controllers/order/orderlist.js");
const orderlistbyuser = require("../controllers/order/orderlist_by_user.js");
const updateorderstatus = require("../controllers/order/update_order_status.js");
const singleorder = require("../controllers/order/single_order");
const router = express.Router();

router.post("/", authenticateToken, createorder);
router.get("/", orderlist);
router.get("/orderbyuser", authenticateToken, orderlistbyuser);
router.get("/:id", singleorder);
router.post("/changestatus/:id", updateorderstatus);
