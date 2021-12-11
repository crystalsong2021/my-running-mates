const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: String,
  address: String,
  date:Date,
  time:Date,
  lat:Number,
  lng:Number
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;