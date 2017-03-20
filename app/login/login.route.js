
var loginCtrl = require("./loginController");
module.exports = function (app,passport) {
    app.get("/login",loginCtrl.getLoginPage);
    app.post("/login",loginCtrl.authenticateUser);
 app.get('/login/facebook',
   passport.authenticate('facebook'));
 app.get('/login/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

};