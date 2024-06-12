//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const productApi = require('../apis/products-apis')
const cartApi = require('../apis/cart-apis')
const userApi=require('../apis/users-apis')

const login=require("../login/login")
//fetch all records
router.get("/fetch", productApi.products_all)
router.post("/login",login.loginfun)
router.get("/fetch-cart",cartApi.getcart)
router.post("/insert-user",userApi.insert_user)
router.post("/add-p-to-cart",cartApi.insert_product)
router.put("/update-p-in-cart",cartApi.update_product)
router.post("/delete-p-in-cart",cartApi.delete_product)




module.exports = router
