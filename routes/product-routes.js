//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const productApi = require('../apis/products-apis')
const cartApi = require('../apis/cart-apis')
const userApi=require('../apis/users-apis')

const login=require("../login/login")

//user creation and user login
router.post("/login",login.loginfun)
router.post("/insert-user",userApi.insert_user)
router.post("/delete-user",userApi.delete_user)


//for cart operations
router.get("/fetch-cart",cartApi.getcart)
router.post("/add-p-to-cart",cartApi.insert_product)
router.put("/update-p-in-cart",cartApi.update_product)
router.post("/delete-p-in-cart",cartApi.delete_product)

//for product operations
router.get("/fetch", productApi.products_all)
router.post("/insert-p-in-list",productApi.insert_product_to_list)
router.post("/delete-p-from-list",productApi.delete_product_from_list)
router.put("/update-p-in-list",productApi.update_product_in_list)

module.exports = router
