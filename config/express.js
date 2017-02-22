//load express module
var app = require("express")();
var logger = require("./logger");
app.use(logger);
app.set('view engine', 'ejs');
require("../app/index/index.route")(app);
require("../app/login/login.route")(app);

module.exports = app;