const express = require('express');
const userlist = require('../controllers/user/userlist.js');
const register = require('../controllers/user/register.js');
const router = express.Router();

router.get('/', userlist);
router.post('/register', register)
module.exports= router;