'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/web-dev'
  },

  redis : {
    host : 'localhost',
    port : 6379
  },

  seedDB: false
};
