'use strict';

var _ = require('lodash');
var Restaurants = require('./restaurants.model');

// Get list of restaurantss
exports.index = function(req, res) {
  Restaurants.find(function (err, restaurantss) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(restaurantss);
  });
};

// Get a single restaurants
exports.show = function(req, res) {
  Restaurants.findById(req.params.id, function (err, restaurants) {
    if(err) { return handleError(res, err); }
    if(!restaurants) { return res.status(404).send('Not Found'); }
    return res.json(restaurants);
  });
};

// Creates a new restaurants in the DB.
exports.create = function(req, res) {
  Restaurants.create(req.body, function(err, restaurants) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(restaurants);
  });
};

// Updates an existing restaurants in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Restaurants.findById(req.params.id, function (err, restaurants) {
    if (err) { return handleError(res, err); }
    if(!restaurants) { return res.status(404).send('Not Found'); }
    var updated = _.merge(restaurants, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(restaurants);
    });
  });
};

// Deletes a restaurants from the DB.
exports.destroy = function(req, res) {
  Restaurants.findById(req.params.id, function (err, restaurants) {
    if(err) { return handleError(res, err); }
    if(!restaurants) { return res.status(404).send('Not Found'); }
    restaurants.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}