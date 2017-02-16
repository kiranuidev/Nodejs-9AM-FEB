//We are creating a server.
//to create the server we need http module.
//Hence import http module.
var http = require("http");
function customRequestHandler(req, res) {
    routeRequest(req,res);
}

function routeRequest(req, res) {

    if (req.url == "/login") {
        sendLoginPage(req, res);
    }
    else if (req.url == "/register") {
        sendRegisterPage(req, res);
    }
    else {
        res.end("<h1>default Page</h1>")
    }
}

function sendLoginPage(req, res) {
    res.end("<h1>Login Page</h1>");
}
function sendRegisterPage(req, res) {
    res.end("<h1>Register Page</h1>");
}
var server = http.createServer(customRequestHandler);

server.listen(4000);
console.log("Server listening on port 4000");
//setTimout(funName,5000)