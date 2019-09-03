const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const pool = require("./database.conf");
const bcrypt = require("bcrypt");

passport.use(new LocalStrategy( (username, password, done) =>{

}));

