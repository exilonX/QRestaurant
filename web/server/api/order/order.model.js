'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var OrderSchema = new Schema({
  restaurant_id : String,
  restaurant_name : String,
  table_id : String,
  timestamp : Date,
  active : {
    type : Boolean,
    default : true,
    index : true
  },
  session_ids : [{
    user_name : String,
    token : String,
    master : Boolean
  }],
  waiter_ids : [{
    name : String,
    id : String
  }],
  order_items : [{
    name : String,
    id_menu : String,
    quantity : String,
    price : Number,
    ordered_user : String
  }],
  notifications : {
    table : [{
      user : String,
      master : Boolean,
      approved : Boolean,
      timestamp : Date
    }],
    order : [{
      user: String,
      seen : Boolean,
      served : Boolean,
      timestamp : Date,
      order_items : [{
        name : String,
        id_menu : String,
        quantity : String,
        price : Number
      }]
    }],
    check : {
      user : String,
      timestamp : Date,
      seen : Boolean,
      total : Number,
      individual_total : [{
        user : String,
        total : Number
      }]
    },
    finished : {
      timestamp : Date
    }
  }

});

module.exports = mongoose.model('Order', OrderSchema);