//impor the express module
var express = require("express");

//execute the express module
var app = express();

app.get("/*", handleDefaultRoute);
// app.get("/login", handleLogin);
//app.get("/",handleDefaultRoute);
function handleDefaultRoute(req, res) {
    if (req.url=="/") {
        res.sendFile(__dirname + "/index.html");
    }
    else 
    {
         res.sendFile(__dirname + req.url+".html");
    }

}

function handleLogin(req, res) {
    res.sendFile(__dirname + "/login.html");
}

app.listen(3000);