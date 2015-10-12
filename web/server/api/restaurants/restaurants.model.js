'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RestaurantsSchema = new Schema({
    name : String,
    address : String,
    website : String,
    tables : [{
        name : String,
        id : String,
        qr : String,
        location : String
    }]
});

module.exports = mongoose.model('Restaurants', RestaurantsSchema);