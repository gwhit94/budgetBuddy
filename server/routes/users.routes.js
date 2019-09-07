const express = require('express');
const router = express.Router();
const userFunctions = require('../models/users.models');
const passport = require('passport');

router.post('/login', passport.authenticate('local'), (req, res) => {
    let signedToken = jwt.sign({userId: req.user.userId}, process.env.SECRET_KEY);
    res.send({user: req.user, jwt: signedToken});
    // res.redirect('users/' + req.user.username);
})

router.post('/signup', (req, res) => {
    userFunctions.createNewUser(res, req.body)
})

module.exports = passport;
module.exports = router;