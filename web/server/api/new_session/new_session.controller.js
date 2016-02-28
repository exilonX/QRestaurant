'use strict';

var _ = require('lodash');
var async = require('async');

var NewSession = require('./new_session.model');
var restaurantQueries = require('../restaurants/restaurants.queries');
var orderQueries = require('../order/order.queries');


/**
 * When the user clicks a qr link it will have to create a new session
 * In order to create a new session the table must be free
 * @param req
 * @param res
 */
exports.createSession = function createSession(req, res) {
  var restaurantId = req.params.restaurantId;
  var tableId = req.params.tableId;

  async.waterfall([
      // check if the table is active and all the keys are correct
      function(next) {
        restaurantQueries.checkIfTableRestaurantExist(restaurantId, tableId, next);
      },
      // check if there are no other orders in progress
      function(next) {
        orderQueries.checkOrdersInProgressTable(restaurantId, tableId, next);
      }
    ],
    function(err, end) {
      if (err) {
        return handleError(res, err);
      }

      // if everything is ok and all the prerequisites are met create a new session
      // 1. Insert a new session object
      // 2. Notify all the interested waiters that a new order will be made
      // 3.



    }

  )

}



// Get list of new_sessions
exports.index = function(req, res) {
  NewSession.find(function (err, new_sessions) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(new_sessions);
  });
};

// Get a single new_session
exports.show = function(req, res) {
  NewSession.findById(req.params.id, function (err, new_session) {
    if(err) { return handleError(res, err); }
    if(!new_session) { return res.status(404).send('Not Found'); }
    return res.json(new_session);
  });
};

// Creates a new new_session in the DB.
exports.create = function(req, res) {
  NewSession.create(req.body, function(err, new_session) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(new_session);
  });
};

// Updates an existing new_session in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  NewSession.findById(req.params.id, function (err, new_session) {
    if (err) { return handleError(res, err); }
    if(!new_session) { return res.status(404).send('Not Found'); }
    var updated = _.merge(new_session, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(new_session);
    });
  });
};

// Deletes a new_session from the DB.
exports.destroy = function(req, res) {
  NewSession.findById(req.params.id, function (err, new_session) {
    if(err) { return handleError(res, err); }
    if(!new_session) { return res.status(404).send('Not Found'); }
    new_session.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}