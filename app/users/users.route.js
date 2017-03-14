var usersCtrl = require("./users.controller");
module.exports = function (app) {
    app.post("/api/users/create",usersCtrl.create);
     app.post("/api/users/login",usersCtrl.login);
};

