const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const incomeFunctions = require('../models/income.models');

// router.get('/byId/:userId', (req, res)=>{
//     userFunctions.getUserById(res, req.params.userId);
// })
router.post('/signup', (req,res)=>{
    incomeFunctions.addIncome(res, req.body);
})

module.exports = router;