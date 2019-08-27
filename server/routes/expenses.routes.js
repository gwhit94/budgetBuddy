const express = require('express');
const router = express.Router();
const expensesFunctions = require('../models/expenses.models');

router.get('/getbyId/:userid', (req, res) => {
    expensesFunctions.getExpense(res, req.params.userid);
})
router.post('/add', (req, res) => {
    expensesFunctions.addExpense(res, req.body);
})
router.delete('/delete/:id', (req, res) => {
    expensesFunctions.deleteExpense(res, req.params.id);
})


module.exports = router;