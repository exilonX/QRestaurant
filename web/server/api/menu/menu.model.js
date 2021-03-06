'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MenuSchema = new Schema({
  restaurant_id : String,
  items : [{
    sub_category : String,
    main_category : String,
    code : String,
    name : String,
    price : Number,
    ingredients : [{
      name : String,
      quantity : Number
    }],
    calories : Number
  }],

  main_categories : [{
    background : String,
    category_name : String,
    image_url : String,
    sub_categories : [{
      sub_name : String,
      image_url : String,
      background : String
    }]
  }]
});

module.exports = mongoose.model('Menu', MenuSchema);
