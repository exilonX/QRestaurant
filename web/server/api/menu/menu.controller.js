'use strict';

var _ = require('lodash');
var Menu = require('./menu.model');

// Get list of menus
exports.index = function(req, res) {
  Menu.find(function (err, menus) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(menus);
  });
};

// Get a single menu
exports.show = function(req, res) {
  Menu.findById(req.params.id, function (err, menu) {
    if(err) { return handleError(res, err); }
    if(!menu) { return res.status(404).send('Not Found'); }
    return res.json(menu);
  });
};

// Creates a new menu in the DB.
exports.create = function(req, res) {
  Menu.create(req.body, function(err, menu) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(menu);
  });
};

// Updates an existing menu in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Menu.findById(req.params.id, function (err, menu) {
    if (err) { return handleError(res, err); }
    if(!menu) { return res.status(404).send('Not Found'); }
    var updated = _.merge(menu, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(menu);
    });
  });
};

// Deletes a menu from the DB.
exports.destroy = function(req, res) {
  Menu.findById(req.params.id, function (err, menu) {
    if(err) { return handleError(res, err); }
    if(!menu) { return res.status(404).send('Not Found'); }
    menu.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}