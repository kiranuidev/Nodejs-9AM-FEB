var config = require("../../config/environment/development")
var request = require("request");
module.exports = function (app) {
    app.get("/walmart", function (req, res) {
        //console.log(config);
        search("ipod",req,res);
    });

    app.post("/walmart",function(req,res){
        console.log(req.body);
        // res.render("walmart");
        search(req.body.search,req,res);
    });
    function search(search,req,res){
         var url = config.wallMartUrl;
         var query = url + "&query="+search;
        request(query, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var products = JSON.parse(body);
               // console.log(products);
                res.render("walmart",{products:products});
            } else {
                res.send(err);
            }
        });
    }

}