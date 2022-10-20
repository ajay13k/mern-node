const express = require("express");
const productRoute = express.Router();
const productController = require("../Controllers/productController");
productRoute.post("/product/create", productController.createProduct);
productRoute.get("/product/get", productController.getProduct);
productRoute.get("/product/getbyid/:id", productController.getbyidProduct);
productRoute.delete("/product/delete/:id", productController.deleteProduct);
productRoute.put("/product/update/:id", productController.updateProduct);
productRoute.get("/product/search/:key", productController.searchProduct);

module.exports = productRoute;
