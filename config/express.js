//load express module
var express = require("express");
var app = express();
var logger = require("./logger");
var jwt = require("jwt-simple");
var passport = require("passport");
 var path = require("path");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(authorize);

app.use(logger);



require("./passport")(app,passport);
var publicDir = path.resolve("../", "NODEJS-9AM-FEB");
console.log(publicDir);
app.use(express.static(publicDir+"/public"));
app.set('view engine', 'ejs');
//to maintain persistent sessioins 
app.use(passport.initialize());
app.use(passport.session());

require("../app/index/index.route")(app);
require("../app/login/login.route")(app,passport);
require("../app/products/products.route")(app);
require("../app/profile/profile.route")(app);
require("../app/users/users.route")(app);


function authorize(req, res, next) {
    if (req.url == "/login" 
    ||req.url == "/login/facebook" 
    || req.url == "/api/users/create") {
        console.log("Valid route");
        next();
    }
    else {
        if (req.headers && req.headers.authorization) {
            var token = req.headers.authorization;
            console.log(token);
            if (token) {
                var decode = jwt.decode(token,"IamTheTougestLogic");
                console.log(decode);
                if (decode) {
                    next();
                }
                else {
                    res.json({ error: "Invalid token" });
                }
            }
            else {
                res.json({ error: "You are not authorized" });
            }
        }
        else {
                res.json({ error: "You are not authorized" });
            }

    }

}
module.exports = app;