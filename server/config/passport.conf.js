const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const pool = require("../connections");

passport.use(new LocalStrategy(
    function(username, password, done){
        users.findOne({username: username}, function(err, user){
            if (err){ return done(err);}
            if (!user){ 
                return done(null, false, { message: 'Incorrect Username.' });
            }
            if (!user.validPassword(password)){
                return done(null, false, { message: 'Incorrect Password.' });
            }
            return done(null, user);
        });
    }
));