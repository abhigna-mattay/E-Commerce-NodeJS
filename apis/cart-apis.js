//import token
let token = require('../token/token')
//import modules
const express = require('express')
const {Cart} = require('../model/Cart')
console.log(Cart)
const getcart = async (req, res) => {
    let u_name = req.body.u_name
	
	console.log(u_name)
	//console.log(u_pwd)

    //console.log("in login function")
    try {
        //console.log("in try block")
        const ucart = await Cart.findOne({"u_name":u_name})
        //const ucart = await Cart.find()

        console.log(ucart)
        if(!ucart){
            //console.log("Login failed")
            res.send({"cart":"not available"})
        }
        else {
            //console.log("Login success")
            res.send({"cart":"available","message":ucart})
            
        }

        
    }
    catch (error) {
        console.log('Fetch error :- ', error)
        res.json({ 'message': error })
    }
}

// insert products to cart
const insert_product= async(req,res)=>{
    let obj = new Cart({
        "p_id": req.body.p_id,
        "p_cost": req.body.p_cost,
        qty: 1,
        "p_img": req.body.p_img,
        "u_name": req.body.u_name
        })

    try {
        const product_inserted= await obj.save()
        console.log("product inserted to cart successfully")
        res.send({"insert-product-to-cart":"success"})
    }
    catch (error)
    {
        res.send({"insert-product-to-cart":"failed"})
    }
}

//update products in cart
const update_product = async (req, res) => {
    let p_id = req.body.p_id
    let u_name=req.body.u_name
    const product = {
        qty:req.body.qty
    }
    try {
        const updateProduct = await Cart.updateOne(
            { p_id , u_name }, product
        )
        if (updateProduct.modifiedCount != 0) {
            console.log('Product Updated', updateProduct)
            res.send({ 'update-product-in-cart': 'success' })
        }
        else {
            console.log('Product not updated')
            res.send({ 'update-product-in-cart': 'Product Not Found In Cart' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}

//delete product from cart
const delete_product = async (req, res) => {
    let p_id = req.body.p_id
    let u_name=req.body.u_name
    try {
        const deletedproduct = await Cart.deleteOne({ p_id , u_name })
        if (deletedproduct.deletedCount != 0) {
            console.log('Product Deleted')
            res.send({ 'delete-product-from-cart': 'success' })
        }
        else {
            console.log('Product Not deleted')
            res.send({ 'delete-product-from-cart': 'Product Not Found in Cart' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}

//export router
module.exports = {getcart,insert_product,update_product,delete_product}
