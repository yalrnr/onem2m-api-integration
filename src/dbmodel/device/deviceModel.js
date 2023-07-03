const mongoose = require('mongoose')

const measurementSchema = new mongoose.Schema({
    type: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      required: true
    }
  });

const deviceSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true,'The device name is must']
    },
    values: {
        type: [measurementSchema],
        required: true
    }
});

const deviceModel = mongoose.model('Device',deviceSchema);

module.exports = deviceModel
