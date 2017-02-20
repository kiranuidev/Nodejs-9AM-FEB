//impor the express module
var express = require("express");

//execute the express module
var app = express();
app.use(express.static("assets"));
app.use(doLogging);
app.get("/", handleDefaultRoute);
//app.get("/",doLogging, handleDefaultRoute);
app.get("/login", handleLogin);
app.get("/products", products);
//app.get("/",handleDefaultRoute);
function handleDefaultRoute(req, res) {
    if (req.url == "/") {
        res.sendFile(__dirname + "/index.html");
    }
    // else 
    // {
    //      res.sendFile(__dirname + req.url+".html");
    // }

}

function handleLogin(req, res) {
    res.sendFile(__dirname + "/login.html");
}

function products(req, res) {
    res.sendFile(__dirname + "/products.html");
}

function doLogging(req, res, xyz) {
    if (req.url == "/") {
        console.log("Hey i am serving index file");
        xyz();
    }
    else if (req.url == "/products") {
        console.log("User not authenticated");
        res.sendFile(__dirname + "/login.html");
    }
    else {
        xyz();
    }

}

app.listen(3000);