var EventEmitter = require('events');

var myEmitter = new EventEmitter();
require('./sendemail')(myEmitter);
require("./sendSMS")(myEmitter);

myEmitter.emit("SEND-SMS",{phone:"9959688870"});
myEmitter.emit("SEND-EMAIL",{email:"kiran@gmail.com"});
// myEmitter.on('USER-CREATED', function(data){
//   console.log(data);
// });
// myEmitter.emit('USER-CREATED',"kiran");

// myEmitter.emit("USER-LOGGED-OUT","kiran");

// myEmitter.on("USER-LOGGED-OUT",function(args){

// });

