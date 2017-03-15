//load express module
var app = require("express")();
var logger = require("./logger");
var jwt = require("jwt-simple");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(authorize);

app.use(logger);
app.set('view engine', 'ejs');
require("../app/index/index.route")(app);
require("../app/login/login.route")(app);
require("../app/products/products.route")(app);
require("../app/profile/profile.route")(app);
require("../app/users/users.route")(app);


function authorize(req, res, next) {
    if (req.url == "/api/users/login" || req.url == "/api/users/create") {
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