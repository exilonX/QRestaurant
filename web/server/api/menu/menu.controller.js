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

exports.showAllCategories = function showAllCategories(req, res) {
  var restaurant_id = req.params.restaurant_id + '';
  Menu.findOne(
    { restaurant_id : restaurant_id},
    { _id : 0, 'main_categories.category_name' : 1, 'main_categories.image_url' : 1, 'main_categories.background' : 1},
    function(err, result) {
      if (err) { console.log(err); return handleError(res, err); }

      var main_categories = result.main_categories;
      return res.status(200).json(main_categories);
  });
}

exports.showAllSubcategories = function showAllSubcategories(req, res) {
  var category = req.params.category;
  var restaurant_id = req.params.restaurant_id + '';
  console.log(category, restaurant_id);
  Menu.findOne(
    { restaurant_id : restaurant_id},
    { _id : 0, 'main_categories.sub_categories' : 1, main_categories : {$elemMatch : { category_name : category } } },
    function(err, result) {
      if (err) { console.log(err); return handleError(res, err); }

      var sub_categories = result.main_categories[0].sub_categories;
      return res.status(200).json(sub_categories);
  });
}

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
