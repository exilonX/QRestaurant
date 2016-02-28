/**
 * Created by ionelmerca on 24.02.2016.
 */

var Restaurant = require('./restaurants.model');

/**
 * Check if restaurantId and tableId are valid
 * @param restaurantId - the id of a restaurant
 * @param tableId - the id of a table from a restaurant
 * @param next - callback to be called at finish
 */
module.exports.checkIfTableRestaurantExist = function checkIfTableRestaurantExist(restaurantId, tableId, next) {
  var query = {
    _id : restaurantId,
    'tables.$.id' : tableId
  };

  Restaurant.findOne(query, function(err, data) {
    if (err)
      return next(err);

    if (!data)
      return next(new Error('No match found'));

    next(null);
  });
}

