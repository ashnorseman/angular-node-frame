'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Menu Schema
 */
var MenuSchema = new Schema({
  name: String,
  showName: String,
  content: {
    uri: String
  }
});

MenuSchema
  .virtual('basicInfo')
  .get(function() {
    return {
      'name': this.name,
      'showName': this.showName
    };
  });

mongoose.model('Menu', MenuSchema);
