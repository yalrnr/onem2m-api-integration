const deviceController = require('./deviceControllers')

const deviceRouter = require('express').Router()

deviceRouter.get("/", verifyToken, deviceController.getAllDevices);
deviceRouter.post("/", verifyToken, deviceController.postDevice)
deviceRouter.get("/:id", verifyToken, deviceController.getDeviceById);
deviceRouter.patch("/:id", verifyToken, deviceController.updateDeviceById)
deviceRouter.delete("/:id", verifyToken, deviceController.deleteDeviceById);

module.exports = deviceRouter

function verifyToken(req,res,next) {
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader === 'undefined') {
        res.send({result : "Token is not valid"})
    }
    else {
        const token = bearerHeader.split(' ')[1]
        req.token = token
    }
    next()
}