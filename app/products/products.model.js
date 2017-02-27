//step1 in defining the schema for mongoose.
var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
   model:{type:String},
   price:{type:Number},
   description:{type:String}
});



