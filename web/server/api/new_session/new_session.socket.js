/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var NewSession = require('./new_session.model');

exports.register = function(socket) {
  NewSession.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  NewSession.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('new_session:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('new_session:remove', doc);
}