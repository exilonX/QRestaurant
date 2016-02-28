'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NewSessionSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('NewSession', NewSessionSchema);