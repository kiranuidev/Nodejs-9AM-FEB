//all the db connectivity will be happening from here..
//import the mongoose dependency..

var mongoose = require("mongoose");
var config = require("./environment/development");
var conenctionString = config.databases.mongodb;

var mongodb = function () {
    mongoose.connect(conenctionString);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("database connected");
    });
    //import your models
    require("../app/products/products.model");
     require("../app/profile/profile.model");
    require("../app/users/users.model");

}

module.exports=mongodb;

