
var productsCtrl = require("./productsCtrl");
module.exports = function (app) {
    app.get("/api/products",productsCtrl.getProductsPage);
    //route with id.
    // app.get("/products/:id",productsCtrl.getTopTenProducts);
    app.get("/products/create",productsCtrl.showAddProductsPage);
    app.post("/products/create",productsCtrl.create);
    app.get("/products/insertAll",productsCtrl.insertProducts);
      app.post("/products/search",productsCtrl.searchProducts);
     
};