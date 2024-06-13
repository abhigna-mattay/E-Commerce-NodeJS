//import db schema
const {Product} = require('../model/Product')
console.log(Product)


//get all products
const products_all = async (req, res) => {
    try {
        const products = await Product.find()
        console.log('Data sent')
        res.json(products)
    }
    catch (error) {
        console.log('Fetch error :- ', error)
        res.json({ 'message': error })
    }
}

// insert product into the products_list
const insert_product_to_list = async(req,res) => {
    let obj = new Product({
        
            "p_id": req.body.p_id,
            "p_name": req.body.p_name,
            "p_cost": req.body.p_cost,
            "p_cat": req.body.p_cat,
            "p_desc": req.body.p_desc,
            "p_img": req.body.p_img
        
    })
    try {
        const inserted_product=await obj.save()
        console.log("Product inserted into products list")
        res.send({"insert-product-to-list":"success"})
    }

    catch(error)
    {
        console.log("errror :- ",error)
        res.send({"insert-product-to-list":"failed"})
        
    }
}

//delete product from products-list
const delete_product_from_list = async (req, res) => {
    let p_id = req.body.p_id
    try {
        const deletedproduct = await Product.deleteOne({ p_id })
        if (deletedproduct.deletedCount != 0) {
            console.log('Product Deleted')
            res.send({ 'delete-product-from-list': 'success' })
        }
        else {
            console.log('Product Not deleted')
            res.send({ 'delete-product-from-list': 'Product Not Found in list' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}


//update product in products-list
const update_product_in_list = async (req, res) => {
    let p_id = req.body.p_id
    const product = {
        p_name:req.body.p_name,
        p_cost:req.body.p_cost
    }
    try {
        const updateProduct = await Product.updateOne(
            { p_id }, product
        )
        if (updateProduct.modifiedCount != 0) {
            console.log('Product Updated', updateProduct)
            res.send({ 'update-product-in-list': 'success' })
        }
        else {
            console.log('Product not updated')
            res.send({ 'update-product-in-list': 'Product Not Found In list' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}
module.exports={ products_all,insert_product_to_list,delete_product_from_list,update_product_in_list}