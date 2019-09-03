const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const pool = require("../connections");

passport.serializeUser((user, done) => done(null, user));

passport.use("local-strat", new LocalStrategy((username, password, done) => {
    pool.query(`SELECT * FROM user WHERE username = ?`, username, (err, results) => {
        if (err) {
            return done(err);
        }
        if (!results[0]) {
            return done(null, false, { message: 'Incorrect Username.' });
        }
        if (!bcrypt.compareSync(password, results[0].password)) {
            return done(null, false, { message: 'Incorrect Password.' });
        }
        return done(null, { username: results[0].username, id: results[0].user_id, first_name: results[0].first });
    });
}
));
// JWT 
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
passport.use('jwt-strat', new JwtStrategy(opts, (jwt_payload, done) => {
    pool.query(`SELECT * FROM user WHERE username = ?`, jwt_payload.username, (err, user) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));

module.exports = passport;