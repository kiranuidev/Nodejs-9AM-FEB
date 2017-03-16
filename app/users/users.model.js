var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var users =     {
  
    "username" : {type: String},
    "email" : {type: String},
    "password":{type: String},
     "age" : {type: Number},
    "phone" : {type:Number},
    "isAdmin":{type:Boolean, default:false}
    
};
var userSchema = mongoose.Schema(users);

userSchema.pre("save",function(next){
    var user = this;
    if (user.password) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });

    } else {
        next();
    }
});

userSchema.methods.comparePassword = function(password, cb){
bcrypt.compare(password, this.password,function(err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};
mongoose.model("user",userSchema);


