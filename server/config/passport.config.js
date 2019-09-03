const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const pool = require("./database.conf");
const bcrypt = require("bcrypt");

passport.use(new LocalStrategy((username, password, done) =>{
   //find if user with that username exists
   //handle any errors (ends chain) done (error, null, null) OR done (error)
   //if no user send back no user / appropriate message (ends chain)
   //check if password matches user in database
   //if it doesn't math send back appropriate message (ends chain)
   //if it does match, send user object back to the route (ends strategy)
}
));

// done(arg1, arg2?, arg3?)
//arg1= Any Errors (values are error or null)
//arg2= user (value is actual user object or false)
//arg3= any message to go along with the failure / success (values are anything you want)


///router.get("todo/",jwt-passport, (req, res)=>{
    //find todos by userId etc. etc.
    //
    //
//})
