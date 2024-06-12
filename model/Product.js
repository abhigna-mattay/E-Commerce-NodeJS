const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    p_id:Number,
    p_name:String,
    p_cost:Number,
    p_cat:String,
    p_desc:String,
    p_img:String
})
const users = new mongoose.Schema({
    u_id:Number,
    u_name:String,
    u_pwd:String,
    u_email:String,
    u_addr:String,
    u_contact:Number
})



const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', users);


module.exports ={
    Product,
    User
    
}
