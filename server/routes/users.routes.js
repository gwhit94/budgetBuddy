const express = require('express');
const router = express.Router();
const userFunctions = require('../models/users.models');

router.get('/:username', (req, res) => {
    userFunctions.getUser(res, req.params.username);
})
router.post('/signup', (req, res) => {
    userFunctions.createNewUser(res, req.body)
})

module.exports = router;