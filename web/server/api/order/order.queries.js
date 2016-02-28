/**
 * Created by ionelmerca on 24.02.2016.
 */

var Order = require('./order.model');



/**
 * Check if the are orders in progress at a certain table from a restaurant
 * An order is in progress if active is true
 * @param restaurantId
 * @param tableId
 * @param next
 */
module.exports.checkOrdersInProgressTable = function(restaurantId, tableId, next) {
  var query = {
    restaurant_id : restaurantId,
    table_id : tableId,
    active : true
  };

  Order.findOne(query, function (err, data) {
    if (err)
      return next(err);

    if (data)
      return next(new Error('Active orders in progress'));

    next(null);
  });
}