const express = require('express')
const router = express.Router();
const AuthController = require("../controllers/authController");                             
const UserController = require("../controllers/userController");    
const ProductController = require("../controllers/productController");    
const CartController = require("../controllers/cartController");    
const AccessMiddleware = require("../middleware/accessMiddleware");
const OrderController = require('../controllers/orderController');

//User Routes

router.get("/api/user", AccessMiddleware, UserController.getProfile);

router.get("/api/user/:id", AccessMiddleware, UserController.getUserById);

router.get("/api/users", AccessMiddleware, UserController.getAllUsers);

router.post("/api/user/createUser", UserController.createUser);

//Auth Routes

router.post("/api/auth/login", AuthController.logIn);

//Product Routes

router.get("/api/product/products", AccessMiddleware, ProductController.getAllProducts);

router.get("/api/product/:id", AccessMiddleware, ProductController.getProductById);

router.get("/api/categories", AccessMiddleware, ProductController.getCategories);

router.post("/api/product/addProduct", AccessMiddleware, ProductController.addProduct);

//Cart Routes

router.get("/api/cart/:id", AccessMiddleware, CartController.getCart);

router.patch("/api/cart/addProduct/:id", AccessMiddleware, CartController.addToCart);

router.patch("/api/cart/deleteProduct/:id", AccessMiddleware, CartController.deleteFromCart);

router.patch("/api/cart/emptyCart/:id", AccessMiddleware, CartController.emptyCart);

//Order

router.post("/api/order/", AccessMiddleware, OrderController.createOrder);

module.exports = router;