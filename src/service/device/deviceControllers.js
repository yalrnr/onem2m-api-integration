const deviceModel = require('../../dbmodel/device/deviceModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()

let devices = [];

exports.getAllDevices = async (req, res) => {
    jwt.verify(req.token, process.env.secretKey, (error, authData) => {
        if(error) {
            res.send({message : "Invalid Token"})
        }
    })
    try {
        const devices = await deviceModel.find({})
        return res.status(200).json({
            data: devices
        })
    }
    catch (error) {
        return res.status(500).json({
            'message': 'Something went really wrong!'
        })
    }
}

exports.postDevice = async (req, res) => {
    jwt.verify(req.token, process.env.secretKey, (error, authData) => {
        if(error) {
            res.send({message : "Invalid Token"})
        }
    })
    try {
        const reqBody = req.body;
        const result = await deviceModel.create(reqBody)
        return res.status(201).json({
            data: result
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

exports.getDeviceById = async (req, res) => {
    jwt.verify(req.token, process.env.secretKey, (error, authData) => {
        if(error) {
            res.send({message : "Invalid Token"})
        }
    })
    try {
        const deviceId = req.params.id;
        const device = await deviceModel.findById(deviceId)
        if (!device) {
            res.status(404).json({
                message: `Device with this id is not found : ${deviceId}`
            })
        }
        return res.status(200).json({
            data: device
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

exports.updateDeviceById = async (req, res) => {
    jwt.verify(req.token, process.env.secretKey, (error, authData) => {
        if(error) {
            res.send({message : "Invalid Token"})
        }
    })
    try {
        const deviceId = req.params.id
        const reqBody = req.body
        const device = await deviceModel.findById(deviceId)
        if (!device) {
            return res.status(404).json({
                message: `Device with this id is not found : ${deviceId}`
            })
        }
        const result = await deviceModel.findByIdAndUpdate(deviceId,reqBody, {
            new:true,
            runValidators:true
        }) 
        return res.status(200).json({
            data:result
        })
        
    } catch (error) {
        return res.status(500).json({
            data:error.message
        })
    }
    
}

exports.deleteDeviceById = async (req, res) => {
    jwt.verify(req.token, process.env.secretKey, (error, authData) => {
        if(error) {
            res.send({message : "Invalid Token"})
        }
    })
    try {
        const deviceId = (req.params.id);
        const device = await deviceModel.findById(deviceId)
        if (!device) {
            return res.status(404).json({
                message: `Device with this id is not found : ${deviceId}`
            })
        }
        const result = await deviceModel.findByIdAndDelete(deviceId)
        return res.status(200).json({
            data:result
        })
    } catch (error) {
        return res.status(500).json({
            data:error.message
        })
    }
}
