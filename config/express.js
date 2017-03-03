//load express module
var app = require("express")();
var logger = require("./logger");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger);
app.set('view engine', 'ejs');
require("../app/index/index.route")(app);
require("../app/login/login.route")(app);
require("../app/products/products.route")(app);
require("../app/profile/profile.route")(app);
require("../app/users/users.route")(app);

module.exports = app;