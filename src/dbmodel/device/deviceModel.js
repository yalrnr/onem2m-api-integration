const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true,'The device name is must']
    },
    type : {
        type:String,
        required : [true, 'Enter the type of device pls']
    },
    value : {
        type : String,
        required : [true, 'The value is must for the device']
    }
});

const deviceModel = mongoose.model('Device',deviceSchema);

module.exports = deviceModel