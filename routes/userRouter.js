const express = require('express');
const userlist = require('../controllers/user/userlist.js');
const register = require('../controllers/user/register.js');
const login = require('../controllers/user/login.js');
const usersingle = require('../controllers/user/userSingle.js');
const router = express.Router();

router.get('/', userlist);
router.get('/:id', usersingle);
router.post('/register', register);
router.post('/login',login);


module.exports= router;