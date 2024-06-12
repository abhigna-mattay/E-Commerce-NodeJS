//import token
let token = require('../token/token')
//import modules
const express = require('express')
const {User} = require('../model/Product')
const loginfun = async (req, res) => {
    let u_name = req.body.u_name
	let u_pwd = req.body.u_pwd
	//console.log(u_name)
	//console.log(u_pwd)

    console.log("in login function")
    try {
        console.log("in try block")
        const users = await User.findOne({"u_name":u_name,"u_pwd":u_pwd})
        //console.log(users)
        if(!users){
            //console.log("Login failed")
            res.send({"login":"failed"})
        }
        else {
            //console.log("Login success")
            res.send({"login":"success"})
        }

        
    }
    catch (error) {
        console.log('Fetch error :- ', error)
        res.json({ 'message': error })
    }
}

//export router
module.exports = {loginfun}
