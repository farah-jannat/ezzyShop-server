const express = require("express");
const createorder = require("../controllers/order/create_order.js");
const authenticateToken = require("../middlewares/varifytoken.js");
const router = express.Router();

router.post("/", authenticateToken, createorder);
