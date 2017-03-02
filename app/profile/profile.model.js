var mongoose = require("mongoose");

var profile =     {
    "index" : {type: String},
    "age" : {type: Number},
    "eyeColor" : {type: String},
    "name" : {type: String},
    "gender" : {type: String},
    "company" : {type: String},
    "email" : {type: String},
    "phone" : {type: String},
    "address" : {type: String},
    "about" : {type: String}, 
    "latitude" : {type: Number},
    "longitude" :{type: Number},
    "tags" : [{type:String}
            ], 
    "friends" : [
        {
            "id" :{type: String},
            "name" : {type: String},
        }
    ], 
    "greeting" : {type: String},
    "favoriteFruit" :{type: String},
};
var profileSchema = mongoose.Schema(profile);
mongoose.model("profile",profileSchema);