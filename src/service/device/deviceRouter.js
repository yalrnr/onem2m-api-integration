const deviceController = require('./deviceControllers')

const deviceRouter = require('express').Router()


deviceRouter.get("/", deviceController.getAllDevices);
deviceRouter.post("/", deviceController.postDevice)
deviceRouter.get("/:id", deviceController.getDeviceById);
deviceRouter.patch("/:id", deviceController.updateDeviceById)
deviceRouter.delete("/:id", deviceController.deleteDeviceById);

module.exports = deviceRouter