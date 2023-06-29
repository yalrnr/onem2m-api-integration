const express = require('express');
const deviceRouter = require('./service/device/deviceRouter');
const app = express();


app.use(express.json());

app.use('/api/v1/devices', deviceRouter)

module.exports = app