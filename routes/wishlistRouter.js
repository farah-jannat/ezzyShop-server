const express = require("express");
const authenticateToken = require("../middlewares/varifytoken.js");
const addtowishlist = require("../controllers/wishlist/addtowishlist.js");
const wishlist_list = require("../controllers/wishlist/wishlist_list.js");
const removewishlist = require("../controllers/wishlist/frontend/removewishlist.js");
const router = express.Router();

router.post("/", authenticateToken, addtowishlist);
router.get("/", wishlist_list);
router.post("/removewishlist", authenticateToken, removewishlist);
