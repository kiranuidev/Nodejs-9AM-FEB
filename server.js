var server = require("./config/express");
var environment = require("./config/environment/development");
server.listen(environment.port);