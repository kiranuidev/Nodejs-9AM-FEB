var userCtrl = require("./users.controller");
module.exports = function(app) {
    app.post("/api/users/createuser", userCtrl.create);
};