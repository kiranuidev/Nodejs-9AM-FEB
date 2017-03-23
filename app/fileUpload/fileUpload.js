var multer = require('multer');

module.exports = function (app) {
    
    app.post("/api/upload", function (req, res) {
       var storage	=	multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    
    callback(null, file.originalname + '-' + Date.now()+".jpg");
  }
});
var upload = multer({ storage : storage}).single('userPhoto');
       
        console.log("file uploading");
         console.log(req);
        upload(req, res, function (err) {
            if (err) {
                console.log(err);
                return res.end("Error uploading file.");
            }
            res.end("File is uploaded");
        });
    });
}