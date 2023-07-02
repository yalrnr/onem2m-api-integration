const express = require('express');
const deviceRouter = require('./service/device/deviceRouter');
const loginRouter = require('./service/device/loginRouter');
const app = express();


app.use(express.json());

app.use('/api/v1/devices', deviceRouter)
app.use('/api/v1/login', loginRouter)

module.exports = app