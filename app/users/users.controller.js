var usersCtrl = {};
var jwt = require("jwt-simple");
//get the reference of the model 
var userSchema = require("mongoose").model("user");
usersCtrl.create = function (req, res) {
  //get all profileSchema

  var user = new userSchema(req.body);
  user.save(function (err, data) {
    if (err) {
      res.send("Error Occured");
    }
    else {
      res.json(data);
    }
  });


};
usersCtrl.login = function (req, res) {
  var user = req.body;
  //Step 1. Fetch the user name and password from database.
  userSchema.findOne({ username: user.username }, { password: 1,isAdmin:1 }, function (err, data) {
    data.comparePassword(user.password, function (isError, isMatch) {
       if(isError){
         res.json({"Error":isError})
       }
       else{
         if(isMatch){
          var token = generateToken(user);
          res.json({token:token});
         }
         else{
           res.json({"Error":"Password Mismatch"});
         }
        
       }
    });
  });

};


//Once the user logged in send him a token.
function generateToken(payload){
    var secret="IamTheTougestLogic";
   var token = jwt.encode(payload, secret);
  return token;
}

module.exports = usersCtrl;