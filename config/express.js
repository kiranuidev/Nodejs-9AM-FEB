//load express module
var app = require("express")();
var logger = require("./logger");
app.use(logger);
require("../app/index/index.route")(app);
require("../app/login/login.route")(app);

module.exports = app;