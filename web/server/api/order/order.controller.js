'use strict';

var _ = require('lodash');
var Order = require('./order.model');

// Get list of orders
exports.index = function (req, res) {
  Order.find(function (err, orders) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).json(orders);
  });
};

// Get a single order
exports.show = function (req, res) {
  Order.findById(req.params.id, function (err, order) {
    if (err) {
      return handleError(res, err);
    }
    if (!order) {
      return res.status(404).send('Not Found');
    }
    return res.json(order);
  });
};

// Creates a new order in the DB.
exports.create = function (req, res) {
  Order.create(req.body, function (err, order) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(201).json(order);
  });
};

// Updates an existing order in the DB.
exports.update = function (req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Order.findById(req.params.id, function (err, order) {
    if (err) {
      return handleError(res, err);
    }
    if (!order) {
      return res.status(404).send('Not Found');
    }
    var updated = _.merge(order, req.body);
    updated.save(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(200).json(order);
    });
  });
};

// Deletes a order from the DB.
exports.destroy = function (req, res) {
  Order.findById(req.params.id, function (err, order) {
    if (err) {
      return handleError(res, err);
    }
    if (!order) {
      return res.status(404).send('Not Found');
    }
    order.remove(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(204).send('No Content');
    });
  });
};

exports.getTableNotification = function getTableNotification(req, res) {
  var restaurantId = req.params.restaurantId;
  var jsonTables;

  console.log(req.query.tables);

  if (req.query.tables) {
    try {
      jsonTables  = JSON.parse(req.query.tables);
    } catch (e) {
      return handleError(res, e);
    }
  } else {
    return res.status(400).send('Specify tables');
  }


  Order.find({
      restaurant_id: restaurantId,
      table_id: {$in : jsonTables}
    },
    {
      'notifications.table': 1,
      'restaurant_name' : 1,
      'table_id' : 1
    },
    function (err, tableNotification) {
      if (err) {
        return handleError(res, err);
      }

      if (!tableNotification) {
        return res.status(404).send('Not found');
      }

      console.log(tableNotification);
      return res.status(200).json(tableNotification);
    })
};


function handleError(res, err) {
  return res.status(500).send(err);
}
