let mongoose=require('mongoose')
const Carts = new mongoose.Schema({
    p_id:Number,
    p_img:String,
    p_cost:Number,
    qty:Number,
    u_name:String
});

const Cart = mongoose.model('Carts', Carts);
module.exports={Cart}