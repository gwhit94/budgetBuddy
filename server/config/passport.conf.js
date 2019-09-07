const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const pool = require("/config/database.conf");
const bcrypt = require("bcrypt");


passport.serializeUser((user, done)=> done(null, user));

passport.use(new LocalStrategy((username, password, done)=> {
    pool.query("SELECT * FROM USERS WHERE USERNAME = ?", username, (err, user)=> { 
      if (err) { 
        return done(err); 
      }
      if (!user[0]) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!bcrypt.compareSync(password, user[0].Password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user[0]);
    });
  }
));

let jwtOpts = {
  jwtFromRequest: ExtractJwt.fromHeader("JWT"),
  secretOrKey: process.env.SECRET_KEY
};

passport.use(new JwtStrategy(jwtOpts, (jwt_payload, done)=> {
  return done(null, jwt_payload);
}))

module.exports = passport;