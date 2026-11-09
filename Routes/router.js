 const express = require('express');
const router = new express.Router();

const productController = require('../Controllers/productController');
const jwtMiddleware = require('../Middleware/jwtMiddleware')

 //defining paths
router.get('/all-products', productController.getAllProductsController);

router.get('/get-product/:id', productController.getProductsDetailsByIdController);

router.post('/add-wishlist', jwtMiddleware, productController.addToWishlistController);

router.get('/allwishlistitems', jwtMiddleware, productController.getAllWishlistItemsController);

router.delete('/wishlist/removeItem/:id', jwtMiddleware,  productController.deleteItemWishlistController);

router.post('/add-cart', jwtMiddleware, )


 module.exports = router;

 