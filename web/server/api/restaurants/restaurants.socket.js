/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Restaurants = require('./restaurants.model');

exports.register = function(socket) {
  Restaurants.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Restaurants.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('restaurants:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('restaurants:remove', doc);
}