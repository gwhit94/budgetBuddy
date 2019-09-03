const express = require('express');
const router = express.Router();
const userFunctions = require('../models/users.models');
// const passport = require('passport');
// const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
    // sign jwt with information about user
    // let signedToken = jwt.sign({id: req.user.user_id}, process.env.SECRET_KEY);
    // res.send({user: req.user, jwt: signedToken});

    userFunctions.getUser(res, req.body);
})
router.post('/signup', (req, res) => {
    userFunctions.createNewUser(res, req.body)
})

module.exports = router;