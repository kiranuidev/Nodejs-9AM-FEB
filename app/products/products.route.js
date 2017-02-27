
var productsCtrl = require("./productsCtrl");
module.exports = function (app) {
    app.get("/products",productsCtrl.getProductsPage);
    //route with id.
    app.get("/products/:id",productsCtrl.getTopTenProducts);
};