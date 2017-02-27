var db = require("./config/mongoose")();
var server = require("./config/express");
var environment = require("./config/environment/development");
server.listen(environment.port);