const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
require('dotenv').config()

loginRouter.post("/", (req,res) => {
    reqBody = req.body
    if(!reqBody || (reqBody.name !== process.env.adminName || reqBody.password !== process.env.adminPassword || reqBody.role !== process.env.adminRole)) return res.send({message : "Kindly enter the correct user data"})
    jwt.sign(reqBody, process.env.secretkey, {expiresIn : '1h'}, (error,token) => {
        if(error) return res.send({message : "something went wrong"})
        return res.json({token})
    })
})

module.exports = loginRouter