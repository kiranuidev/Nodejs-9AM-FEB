var userCtrl = {},
    userSchema = require("mongoose").model("userDetail");

userCtrl.create = function(req, res) {
    //fetch the data from the request.
    var requestData = req.body;
    //Create the new schema for the userDetail.
    var userDetail = new userSchema(requestData);

    userDetail.save(function(err, data) {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });

};
module.exports = userCtrl;