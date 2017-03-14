
var profileCtrl = require("./profile.controller");
module.exports = function (app) {
    app.post("/api/profiles/getAllProfiles",profileCtrl.getAllProfiles);
     app.post("/api/profiles/getFriends",profileCtrl.getFriends);
      app.post("/api/profiles/searchByFriend",profileCtrl.searchByFriend);
       app.post("/api/profiles/getProfilesByAge",profileCtrl.getProfilesByAge);
       app.post("/api/profiles/search",profileCtrl.search);
};