const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const incomeFunctions = require('../models/income.models');

router.get('/getbyId/:userid', (req, res) => {
    incomeFunctions.getIncome(res, req.params.userid);
})
router.post('/add', (req, res) => {
    incomeFunctions.addIncome(res, req.body);
})
router.delete('/delete/:id', (req, res) => {
    incomeFunctions.deleteIncome(res, req.params.id);
})


module.exports = router;