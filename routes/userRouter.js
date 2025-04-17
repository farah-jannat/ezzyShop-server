const express = require('express');
const userlist = require('../controllers/user/userlist.js');
const register = require('../controllers/user/register.js');
const login = require('../controllers/user/login.js');
const usersingle = require('../controllers/user/userSingle.js');
const updateuser = require('../controllers/user/updateuser.js');
const authenticateToken = require('../middlewares/varifytoken.js');
const deleteuser = require('../controllers/user/deleteuser.js');
const router = express.Router();

router.get('/', userlist);
router.get('/:id', usersingle);
router.post('/register', register);
router.post('/login',login);
router.patch('/:id', authenticateToken, updateuser);
router.delete('/:id', deleteuser);


module.exports= router;



