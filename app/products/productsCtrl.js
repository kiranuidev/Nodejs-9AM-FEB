var productsCtrl = {};
var products =
  [
    {
      "ProductId": "58a3c64c252a52c818362c05",
      "Index": 0,
      "Picture": "http://placehold.it/32x32",
      "Price": 778819,
      "Model": "iPad",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64c09edbec2083c3c3a",
      "Index": 1,
      "Picture": "http://placehold.it/32x32",
      "Price": 654441,
      "Model": "OnePlus3T",
      "Description": "Hello, undefined! You have 6 unread messages."
    },
    {
      "ProductId": "58a3c64ce0eb245ed450dbe0",
      "Index": 2,
      "Picture": "http://placehold.it/32x32",
      "Price": 763647,
      "Model": "Lenovo",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64c81906df65b0aba98",
      "Index": 3,
      "Picture": "http://placehold.it/32x32",
      "Price": 378917,
      "Model": "iPad",
      "Description": "Hello, undefined! You have 1 unread messages."
    },
    {
      "ProductId": "58a3c64c79ecf4f233edb045",
      "Index": 4,
      "Picture": "http://placehold.it/32x32",
      "Price": 962925,
      "Model": "OPPO",
      "Description": "Hello, undefined! You have 10 unread messages."
    },
    {
      "ProductId": "58a3c64c28a64e673d2c27b8",
      "Index": 5,
      "Picture": "http://placehold.it/32x32",
      "Price": 794132,
      "Model": "iPad",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64c97a1100a6106cf1c",
      "Index": 6,
      "Picture": "http://placehold.it/32x32",
      "Price": 139558,
      "Model": "MOTOG",
      "Description": "Hello, undefined! You have 10 unread messages."
    },
    {
      "ProductId": "58a3c64ce36a024d204bf9b1",
      "Index": 7,
      "Picture": "http://placehold.it/32x32",
      "Price": 558833,
      "Model": "iPad",
      "Description": "Hello, undefined! You have 9 unread messages."
    },
    {
      "ProductId": "58a3c64c52b693e3aeeee779",
      "Index": 8,
      "Picture": "http://placehold.it/32x32",
      "Price": 54668,
      "Model": "Blackberry",
      "Description": "Hello, undefined! You have 7 unread messages."
    },
    {
      "ProductId": "58a3c64cbc870d30bfea1c0b",
      "Index": 9,
      "Picture": "http://placehold.it/32x32",
      "Price": 262461,
      "Model": "OnePlus3T",
      "Description": "Hello, undefined! You have 8 unread messages."
    },
    {
      "ProductId": "58a3c64c999c3052339299e8",
      "Index": 10,
      "Picture": "http://placehold.it/32x32",
      "Price": 109753,
      "Model": "Blackberry",
      "Description": "Hello, undefined! You have 1 unread messages."
    },
    {
      "ProductId": "58a3c64c03d41ed2848c2c86",
      "Index": 11,
      "Picture": "http://placehold.it/32x32",
      "Price": 394526,
      "Model": "iPhone",
      "Description": "Hello, undefined! You have 2 unread messages."
    },
    {
      "ProductId": "58a3c64cf4546c45649c259f",
      "Index": 12,
      "Picture": "http://placehold.it/32x32",
      "Price": 116245,
      "Model": "iPhone",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64cc454456713a51757",
      "Index": 13,
      "Picture": "http://placehold.it/32x32",
      "Price": 394615,
      "Model": "Blackberry",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64c45f26f22344e6714",
      "Index": 14,
      "Picture": "http://placehold.it/32x32",
      "Price": 453513,
      "Model": "Lenovo",
      "Description": "Hello, undefined! You have 1 unread messages."
    },
    {
      "ProductId": "58a3c64c425ed3f7f58aed10",
      "Index": 15,
      "Picture": "http://placehold.it/32x32",
      "Price": 423157,
      "Model": "OnePlus3T",
      "Description": "Hello, undefined! You have 2 unread messages."
    },
    {
      "ProductId": "58a3c64cc915a3822d490503",
      "Index": 16,
      "Picture": "http://placehold.it/32x32",
      "Price": 681658,
      "Model": "iPhone",
      "Description": "Hello, undefined! You have 8 unread messages."
    },
    {
      "ProductId": "58a3c64c3106961a75a92827",
      "Index": 17,
      "Picture": "http://placehold.it/32x32",
      "Price": 486588,
      "Model": "OPPO",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64c14934eaac2d5bd50",
      "Index": 18,
      "Picture": "http://placehold.it/32x32",
      "Price": 986060,
      "Model": "Blackberry",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64c014bf37b0ca24795",
      "Index": 19,
      "Picture": "http://placehold.it/32x32",
      "Price": 102441,
      "Model": "iPad",
      "Description": "Hello, undefined! You have 9 unread messages."
    },
    {
      "ProductId": "58a3c64cfa841434bc0d111e",
      "Index": 20,
      "Picture": "http://placehold.it/32x32",
      "Price": 116858,
      "Model": "iPad",
      "Description": "Hello, undefined! You have 7 unread messages."
    },
    {
      "ProductId": "58a3c64c402c68d8f3a06e92",
      "Index": 21,
      "Picture": "http://placehold.it/32x32",
      "Price": 900262,
      "Model": "iPhone",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64cac964505acb0fbeb",
      "Index": 22,
      "Picture": "http://placehold.it/32x32",
      "Price": 634650,
      "Model": "OPPO",
      "Description": "Hello, undefined! You have 7 unread messages."
    },
    {
      "ProductId": "58a3c64c60be0c77eec6744d",
      "Index": 23,
      "Picture": "http://placehold.it/32x32",
      "Price": 745890,
      "Model": "Blackberry",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64c3f3375641db1ffa7",
      "Index": 24,
      "Picture": "http://placehold.it/32x32",
      "Price": 422881,
      "Model": "iPhone",
      "Description": "Hello, undefined! You have 2 unread messages."
    },
    {
      "ProductId": "58a3c64c16b561e7a3947c4d",
      "Index": 25,
      "Picture": "http://placehold.it/32x32",
      "Price": 708864,
      "Model": "OPPO",
      "Description": "Hello, undefined! You have 7 unread messages."
    },
    {
      "ProductId": "58a3c64cbcdf089bc3b82675",
      "Index": 26,
      "Picture": "http://placehold.it/32x32",
      "Price": 331390,
      "Model": "iPad",
      "Description": "Hello, undefined! You have 10 unread messages."
    },
    {
      "ProductId": "58a3c64c5a2307dce4c7fac8",
      "Index": 27,
      "Picture": "http://placehold.it/32x32",
      "Price": 831660,
      "Model": "MOTOG",
      "Description": "Hello, undefined! You have 6 unread messages."
    },
    {
      "ProductId": "58a3c64cba79fde679d9b167",
      "Index": 28,
      "Picture": "http://placehold.it/32x32",
      "Price": 84583,
      "Model": "Lenovo",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64c86d2fd841cb2b201",
      "Index": 29,
      "Picture": "http://placehold.it/32x32",
      "Price": 887895,
      "Model": "OPPO",
      "Description": "Hello, undefined! You have 7 unread messages."
    },
    {
      "ProductId": "58a3c64ce89b7c8bbf51db76",
      "Index": 30,
      "Picture": "http://placehold.it/32x32",
      "Price": 188955,
      "Model": "OnePlus3T",
      "Description": "Hello, undefined! You have 9 unread messages."
    },
    {
      "ProductId": "58a3c64cc767548dd6223943",
      "Index": 31,
      "Picture": "http://placehold.it/32x32",
      "Price": 278284,
      "Model": "Blackberry",
      "Description": "Hello, undefined! You have 2 unread messages."
    },
    {
      "ProductId": "58a3c64cd129ceaade373551",
      "Index": 32,
      "Picture": "http://placehold.it/32x32",
      "Price": 741093,
      "Model": "iPad",
      "Description": "Hello, undefined! You have 1 unread messages."
    },
    {
      "ProductId": "58a3c64c6243cdb4624eb3e9",
      "Index": 33,
      "Picture": "http://placehold.it/32x32",
      "Price": 29020,
      "Model": "Lenovo",
      "Description": "Hello, undefined! You have 4 unread messages."
    },
    {
      "ProductId": "58a3c64c4aff4688f0e7ba5f",
      "Index": 34,
      "Picture": "http://placehold.it/32x32",
      "Price": 694030,
      "Model": "OPPO",
      "Description": "Hello, undefined! You have 9 unread messages."
    },
    {
      "ProductId": "58a3c64c243454a38425736c",
      "Index": 35,
      "Picture": "http://placehold.it/32x32",
      "Price": 182583,
      "Model": "Blackberry",
      "Description": "Hello, undefined! You have 8 unread messages."
    },
    {
      "ProductId": "58a3c64c848245a015dc317b",
      "Index": 36,
      "Picture": "http://placehold.it/32x32",
      "Price": 592066,
      "Model": "Blackberry",
      "Description": "Hello, undefined! You have 9 unread messages."
    },
    {
      "ProductId": "58a3c64c5daf3c611ca92922",
      "Index": 37,
      "Picture": "http://placehold.it/32x32",
      "Price": 571638,
      "Model": "Lenovo",
      "Description": "Hello, undefined! You have 9 unread messages."
    },
    {
      "ProductId": "58a3c64cb7afcf7beed1dedf",
      "Index": 38,
      "Picture": "http://placehold.it/32x32",
      "Price": 839533,
      "Model": "OPPO",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64cf3104a8c72f3930a",
      "Index": 39,
      "Picture": "http://placehold.it/32x32",
      "Price": 755493,
      "Model": "OPPO",
      "Description": "Hello, undefined! You have 10 unread messages."
    },
    {
      "ProductId": "58a3c64c74d48d8bc6ed9fc1",
      "Index": 40,
      "Picture": "http://placehold.it/32x32",
      "Price": 965126,
      "Model": "Blackberry",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64cf548246dc8224e62",
      "Index": 41,
      "Picture": "http://placehold.it/32x32",
      "Price": 305399,
      "Model": "OnePlus3T",
      "Description": "Hello, undefined! You have 8 unread messages."
    },
    {
      "ProductId": "58a3c64c397e956039871978",
      "Index": 42,
      "Picture": "http://placehold.it/32x32",
      "Price": 570153,
      "Model": "MOTOG",
      "Description": "Hello, undefined! You have 9 unread messages."
    },
    {
      "ProductId": "58a3c64c196b83772e836270",
      "Index": 43,
      "Picture": "http://placehold.it/32x32",
      "Price": 546126,
      "Model": "MOTOG",
      "Description": "Hello, undefined! You have 6 unread messages."
    },
    {
      "ProductId": "58a3c64c02145bf06787fd8c",
      "Index": 44,
      "Picture": "http://placehold.it/32x32",
      "Price": 279536,
      "Model": "Blackberry",
      "Description": "Hello, undefined! You have 6 unread messages."
    },
    {
      "ProductId": "58a3c64c202639eb147b0047",
      "Index": 45,
      "Picture": "http://placehold.it/32x32",
      "Price": 18795,
      "Model": "iPad",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64c7bec3f44f3637d7b",
      "Index": 46,
      "Picture": "http://placehold.it/32x32",
      "Price": 711630,
      "Model": "iPhone",
      "Description": "Hello, undefined! You have 6 unread messages."
    },
    {
      "ProductId": "58a3c64c548dd7776746930d",
      "Index": 47,
      "Picture": "http://placehold.it/32x32",
      "Price": 888520,
      "Model": "iPhone",
      "Description": "Hello, undefined! You have 6 unread messages."
    },
    {
      "ProductId": "58a3c64c7d0e72e088077b1f",
      "Index": 48,
      "Picture": "http://placehold.it/32x32",
      "Price": 851342,
      "Model": "Lenovo",
      "Description": "Hello, undefined! You have 10 unread messages."
    },
    {
      "ProductId": "58a3c64cc0611215a1958842",
      "Index": 49,
      "Picture": "http://placehold.it/32x32",
      "Price": 136470,
      "Model": "MOTOG",
      "Description": "Hello, undefined! You have 4 unread messages."
    },
    {
      "ProductId": "58a3c64ceb6d50f41de7cc3a",
      "Index": 50,
      "Picture": "http://placehold.it/32x32",
      "Price": 757179,
      "Model": "iPad",
      "Description": "Hello, undefined! You have 6 unread messages."
    },
    {
      "ProductId": "58a3c64c340a4eb6ecef0c4f",
      "Index": 51,
      "Picture": "http://placehold.it/32x32",
      "Price": 454591,
      "Model": "iPhone",
      "Description": "Hello, undefined! You have 6 unread messages."
    },
    {
      "ProductId": "58a3c64cb1193539b6c6d7ed",
      "Index": 52,
      "Picture": "http://placehold.it/32x32",
      "Price": 596388,
      "Model": "MOTOG",
      "Description": "Hello, undefined! You have 2 unread messages."
    },
    {
      "ProductId": "58a3c64cc2cb2ca0a2d71632",
      "Index": 53,
      "Picture": "http://placehold.it/32x32",
      "Price": 604851,
      "Model": "OPPO",
      "Description": "Hello, undefined! You have 10 unread messages."
    },
    {
      "ProductId": "58a3c64cde2f0ac5c9a191c2",
      "Index": 54,
      "Picture": "http://placehold.it/32x32",
      "Price": 215345,
      "Model": "Lenovo",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64c55d0c7c12a307d59",
      "Index": 55,
      "Picture": "http://placehold.it/32x32",
      "Price": 550396,
      "Model": "iPad",
      "Description": "Hello, undefined! You have 2 unread messages."
    },
    {
      "ProductId": "58a3c64c564fdf1096760977",
      "Index": 56,
      "Picture": "http://placehold.it/32x32",
      "Price": 321321,
      "Model": "Blackberry",
      "Description": "Hello, undefined! You have 9 unread messages."
    },
    {
      "ProductId": "58a3c64c4af50ee31ccda1d4",
      "Index": 57,
      "Picture": "http://placehold.it/32x32",
      "Price": 229799,
      "Model": "Blackberry",
      "Description": "Hello, undefined! You have 3 unread messages."
    },
    {
      "ProductId": "58a3c64c96daebe9a1321398",
      "Index": 58,
      "Picture": "http://placehold.it/32x32",
      "Price": 781789,
      "Model": "OnePlus3T",
      "Description": "Hello, undefined! You have 4 unread messages."
    },
    {
      "ProductId": "58a3c64c6355b1e679def9a9",
      "Index": 59,
      "Picture": "http://placehold.it/32x32",
      "Price": 613083,
      "Model": "OnePlus3T",
      "Description": "Hello, undefined! You have 1 unread messages."
    },
    {
      "ProductId": "58a3c64cd27dc0c8e774ec68",
      "Index": 60,
      "Picture": "http://placehold.it/32x32",
      "Price": 228442,
      "Model": "iPhone",
      "Description": "Hello, undefined! You have 2 unread messages."
    },
    {
      "ProductId": "58a3c64ce1f18d042d78ffe3",
      "Index": 61,
      "Picture": "http://placehold.it/32x32",
      "Price": 721061,
      "Model": "OnePlus3T",
      "Description": "Hello, undefined! You have 2 unread messages."
    },
    {
      "ProductId": "58a3c64c2621dbc3d1696236",
      "Index": 62,
      "Picture": "http://placehold.it/32x32",
      "Price": 17103,
      "Model": "iPad",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64c84c4018dd2fd5450",
      "Index": 63,
      "Picture": "http://placehold.it/32x32",
      "Price": 364439,
      "Model": "iPhone",
      "Description": "Hello, undefined! You have 6 unread messages."
    },
    {
      "ProductId": "58a3c64cb0a8f0e8b0439dbf",
      "Index": 64,
      "Picture": "http://placehold.it/32x32",
      "Price": 77802,
      "Model": "OPPO",
      "Description": "Hello, undefined! You have 3 unread messages."
    },
    {
      "ProductId": "58a3c64c8ef0bded0665be37",
      "Index": 65,
      "Picture": "http://placehold.it/32x32",
      "Price": 714333,
      "Model": "MOTOG",
      "Description": "Hello, undefined! You have 6 unread messages."
    },
    {
      "ProductId": "58a3c64ced1da00ed301f6f9",
      "Index": 66,
      "Picture": "http://placehold.it/32x32",
      "Price": 874425,
      "Model": "OPPO",
      "Description": "Hello, undefined! You have 5 unread messages."
    },
    {
      "ProductId": "58a3c64c69673797309d3de2",
      "Index": 67,
      "Picture": "http://placehold.it/32x32",
      "Price": 966629,
      "Model": "OPPO",
      "Description": "Hello, undefined! You have 6 unread messages."
    }

  ];
var productSchema = require("mongoose").model("product");
productsCtrl.getProductsPage = function (req, res) {
  productSchema.find({}, function (err, data) {
    if (err) {
      res.send("<h1>Error occured</h1>")
    }
    else {
      //res.render("products/products", { products: data });
      res.json(data);
   }
  });
  // res.render("products/products", { products: products });

};
productsCtrl.getTopTenProducts = function (req, res) {
  var productCount = req.params.id;
  var tenProducts = products.slice(0, productCount);
  res.render("products/products", { products: tenProducts });
}

productsCtrl.create = function (req, res) {
  console.log(req.body);
  var product = req.body;
  product.isAvailable = req.body.isAvailable == "on";
  //Create the product document.
  var productToInsert = new productSchema(product);

  productToInsert.save(function (error, data) {
    if (error) {
      res.send("<h1>Product Not Created</h1>");
    }
    else {
      res.send("<h1>Product Created</h1>")
    }
  });

};

productsCtrl.getAllProducts = function () {
  productSchema.find({}, function (err, data) {

  });
};

productsCtrl.getProductById = function () {
  var productId = 1;
  productSchema.findById(productId, function (err, data) {

  });
};

productsCtrl.searchProducts = function (req, res) {
  var criteria = req.body;
  productSchema.find(criteria, function (err, data) {
    if (err) {
      res.send("<h1>Error occured</h1>")
    }
    else {
      res.render("products/products", { products: data });
    }
  });
};

productsCtrl.insertProducts = function (req, res) {
  productSchema.insertMany(products, function (err, data) {
    if (err) {
      res.send(error);
    }
    else {
      res.send("Successful");
    }
  })
}

productsCtrl.showAddProductsPage = function (req, res) {
  res.render("products/addproduct");
};

module.exports = productsCtrl;