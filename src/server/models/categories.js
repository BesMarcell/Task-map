'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var categorySchema = mongoose.Schema({
  id: String,
  name: String,
});

module.exports = mongoose.model('Category', categorySchema);
