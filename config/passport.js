var FacebookStrategy = require('passport-facebook').Strategy;
var fbStrategy = require("./environment/development").facebookAuth;

module.exports=function(app,passport){
fbStrategy.passReqToCallback = true; 
passport.use(new FacebookStrategy(fbStrategy,
    function(req, token, refreshToken, profile, done,next) {
        console.log(profile);
       next();
    }));

}
