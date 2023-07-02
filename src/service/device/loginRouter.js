const deviceController = require('./deviceControllers')
const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
require('dotenv').config()

loginRouter.post("/", (req,res) => {

    const user = {
        name : 'admin',
        password : 'admin@123',
        role : 'admin'
    }
    reqBody = req.body
    // console.log(reqBody);
    if(!reqBody || reqBody.name !== user.name) return res.send({message : "Kindly enter the user data"})
    jwt.sign(user, process.env.secretkey, {expiresIn : '1h'}, (error,token) => {
        if(error) return res.send({message : "something went wrong"})
        return res.json({token})
    })
})

module.exports = loginRouter