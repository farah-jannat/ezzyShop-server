const express = require('express');
const userlist = require('../controllers/user/userlist.js');
const register = require('../controllers/user/register.js');
const login = require('../controllers/user/login.js');
const usersingle = require('../controllers/user/userSingle.js');
const updateuser = require('../controllers/user/updateuser.js');
const authenticateToken = require('../middlewares/varifytoken.js');
const deleteuser = require('../controllers/user/deleteuser.js');
const frontendUpdateUser = require('../controllers/user/frontend/frontend_updateuser.js');
const frontendUser = require('../controllers/user/frontend/frontend_usersingle.js');
const router = express.Router();

router.get('/', userlist);
router.get('/userinfo', authenticateToken, frontendUser)
router.get('/:id', usersingle);
router.post('/register', register);
router.post('/login',login);
router.delete('/:id', deleteuser);
router.patch('/', authenticateToken, frontendUpdateUser);
router.patch('/:id', authenticateToken, updateuser);


module.exports= router;



