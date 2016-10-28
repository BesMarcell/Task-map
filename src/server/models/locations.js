'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var locationSchema = mongoose.Schema({
  name: String,
  categoryId : String,
  coordinateLat : Number,
  coordinateLng : Number
});

module.exports = mongoose.model('Location', locationSchema);
