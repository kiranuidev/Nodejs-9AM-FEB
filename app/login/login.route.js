module.exports = function (app) {
    app.get("/login", function (req, res) {
        res.send("<h1>Login</h1>");
    });
};