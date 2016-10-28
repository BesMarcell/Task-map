'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var descriptionSchema = mongoose.Schema({
  description: String,
  locationId : String
});

module.exports = mongoose.model('Description', descriptionSchema);
