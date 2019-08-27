const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userFunctions = require('../models/users.models');

router.get('/byId/:userId', (req, res)=>{
    userFunctions.getUserById(res, req.params.userId);
})
router.post('/signup', (req,res)=>{
    userFunctions.createNewUser(res, req.body)
})

module.exports = router;