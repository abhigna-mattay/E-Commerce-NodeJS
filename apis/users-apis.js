//import db schema
const {Product, User} = require('../model/Product')

//insert user
const insert_user = async (req, res) => {
    let obj=new User({
        "u_id": req.body.u_id,
        "u_name": req.body.u_name,
        "u_pwd": req.body.u_pwd,
        "u_email": req.body.u_email,
        "u_addr": req.body.u_addr,
        "u_contact": req.body.u_contact
    })
    try {
        console.log("innside try")
        const savedProduct = await obj.save()
        console.log('User inserted')
        res.send({"user-insert":"success"})
    }
    catch (error) {
        console.log("inside catch")
        console.log(error)
        res.send({"msg":error})
        res.status(400).send(error)
    }
    
}

//delete user
const delete_user = async (req, res) => {
    let u_id = req.body.u_id
    try {
        const deletedproduct = await User.deleteOne({ u_id })
        if (deletedproduct.deletedCount != 0) {
            console.log('User Deleted')
            res.send({ 'delete-user': 'success' })
        }
        else {
            console.log('User Not deleted')
            res.send({ 'delete-user': 'failed' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}
module.exports={insert_user,delete_user}