module.exports = function(req,res,next){
  console.log("request came");
  next();
}