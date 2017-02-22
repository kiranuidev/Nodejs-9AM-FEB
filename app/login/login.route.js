
var loginCtrl = require("./loginController");
module.exports = function (app) {
    app.get("/login",loginCtrl.getLoginPage);
    app.post("/login",loginCtrl.authenticateUser);
};