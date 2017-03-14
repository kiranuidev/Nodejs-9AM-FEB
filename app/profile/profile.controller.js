var profileCtrl = {};
//get the reference of the model 
var profileSchema = require("mongoose").model("profile");
profileCtrl.getAllProfiles = function (req, res) {
  //get all profileSchema
  profileSchema.find({}, function (err, data) {
    if (err) {
      res.send("Error Occured");
    }
    else {
      res.json(data);
    }
  });
};

profileCtrl.getFriends = function (req, res) {
  var searchCriteria = req.body.email;
  profileSchema.find(
    { email: searchCriteria },
    { friends: 1, phone: 1 },
    function (err, data) {
      if (err) {
        res.send("Error Occured");
      }
      else {
        res.json(data);
      }
    }
  )
};
profileCtrl.searchByFriend = function (req, res) {
  var searchCriteria = req.body.friendName;
  profileSchema.find(
    { "friends.name": searchCriteria },
    { name: 0, index: 0 },
    function (err, data) {
      if (err) {
        res.send("Error Occured");
      }
      else {
        res.json(data);
      }
    }
  )
};
profileCtrl.getProfilesByAge = function (req, res) {
  var searchCriteria = req.body.age;
  profileSchema.find(
    {
      age: {
        //   //$gt:searchCriteria,
        //  //$gte:searchCriteria,
        $lt: searchCriteria

      }

    },
    {
      name: 1, age: 1
    },
    function (err, data) {
      if (err) {
        res.send("Error Occured");
      }
      else {
        res.json(data);
      }
    }
  )
};
profileCtrl.search = function (req, res) {
  var criteria = req.body;
var buildQuery ={};
var  searchByAge={
   };
if(criteria.age){
  if(criteria.age.minAge){
    searchByAge["$gte"] =criteria.age.minAge
  }
  if(criteria.age.maxAge){
    searchByAge["$lte"] = criteria.age.maxAge;
  }
}

  profileSchema.find({
    $or: [{
      "friends.name": criteria.friendName
    },
    {
      "age":searchByAge
    },
    ]
  },
   {
      name: 1, age: 1,friends:1
    },
    function (err, data) {
      if (err) {
        res.send("Error Occured");
      }
      else {
        res.json(data);
      }
    })
}


module.exports = profileCtrl;