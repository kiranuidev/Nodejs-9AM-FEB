
var productsCtrl = require("./productsCtrl");
module.exports = function (app) {
    app.get("/products",productsCtrl.getProductsPage);
    app.get("/products/:id",productsCtrl.getTopTenProducts);
};