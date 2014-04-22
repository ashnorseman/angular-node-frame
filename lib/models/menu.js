'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Menu Schema
 */
var MenuSchema = new Schema({
  name: String,
  showName: String
});

mongoose.model('Menu', MenuSchema);
