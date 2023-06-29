const deviceController = require('./deviceControllers')

const deviceRouter = require('express').Router()


deviceRouter.get("/", deviceController.getDevices);
deviceRouter.post("/", deviceController.postDevices)
deviceRouter.get("/:id", deviceController.getDevicesById);
deviceRouter.patch("/:id", deviceController.updateDevicesById)
deviceRouter.delete("/:id", deviceController.deleteDevicesById);

module.exports = deviceRouter