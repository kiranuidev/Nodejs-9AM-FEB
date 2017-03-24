var app = require("express")();
var http = require('http').Server(app);
var socket = require("socket.io")(http);


app.get("/",function(req,res){
 res.sendFile(__dirname+"/index.html")
});
socket.on('connection',function(io){
    console.log("user connected");
    console.log(io.id);
    io.on('MYCHAT',function(args){
        console.log(args);
        socket.emit("USER-CHAT",args);
    })
});
http.listen(4000);