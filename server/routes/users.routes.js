const express = require('express');
const router = express.Router();
const userFunctions = require('../models/users.models');

router.get('/login', (req, res) => {
    userFunctions.getUser(res, req.body);
})
router.post('/signup', (req, res) => {
    userFunctions.createNewUser(res, req.body)
})

module.exports = router;