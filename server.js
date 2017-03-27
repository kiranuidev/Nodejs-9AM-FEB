var app = require("express")();
var http = require('http').Server(app);
var socket = require("socket.io")(http);
 var users =[];
var sockets=[];

app.get("/",function(req,res){
 res.sendFile(__dirname+"/index.html")
});
socket.on('connection',function(io){
    console.log("user connected");
    console.log(io.id);

    io.on('MYCHAT',function(args){
        console.log(args); 
        socket.emit("USER-CHAT",args);

    });
    io.on("CREATE-USER",function(username){
        console.log(io.id);
        console.log(username);
        sockets.push({username:username,socketid:io.id});
        console.log(sockets);
        socket.emit("USER-JOINED",username);
    });
    io.on('private-message',function(data){
        var friendSocketId="";
        console.log(data);
      for(var i=0;i<sockets.length;i++){
          if(data.username==sockets[i].username){
              friendSocketId=sockets[i].socketid;
          }
      }
      socket.to(friendSocketId).emit("private-message",data);
    });
});
http.listen(4000);