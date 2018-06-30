const express = require('express');
const router = express.Router();

const Userscontroller = require('../controllers/users');

router.route('/')
.get(Userscontroller.index)
.post(Userscontroller.newUser);

module.exports= router;

