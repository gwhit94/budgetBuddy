const express = require('express');
const router = express.Router();
const typeFunctions = require('../models/expense_types.models');

router.get('/', (req, res) => {
    typeFunctions.getTypes(res, req);
})

module.exports = router;