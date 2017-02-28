//Creating schema of products.

/*
  import monogoose
  create an object with mongoose.Schema({});
  attach the schema to the mongoose model.
  to find the data type built in check the folowing link.
*/

var mongoose = require("mongoose");
var products = {
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    createdDate: { type: Date },
    isAvailable: {type: Boolean}
};
//attach products to the schema
var productSchema = mongoose.Schema(products);
//attach schema to the collectioin/document
//in the database the table name is "products"
//mongoose will pluralize the modelname.
mongoose.model("product",productSchema);
