// module.exports = function(req, res, next) {
//     // If the user is logged in, continue with the request to the restricted route
//     if (req.user) {
//       return next();
//     }
//     // If the user isn't' logged in, redirect them to the login page
//     return res.redirect("/");
//   };

// var JwtStrategy = require('passport-jwt').Strategy,
//     ExtractJwt = require('passport-jwt').ExtractJwt;
// var opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = 'secret';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';


// passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     User.findOne({id: jwt_payload.sub}, function(err, user) {
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);
//         }
//     });
// }));


app.configure(function() {
    app.use(express.static('public'));
  //   app.use(express.cookieParser());
    app.use(express.bodyParser());
  //   app.use(express.session({ secret: 'keyboard cat' }));
    app.use(passport.initialize());
  //   app.use(passport.session());
    app.use(app.router);
  });


  