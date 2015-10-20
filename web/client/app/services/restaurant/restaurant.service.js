'use strict';

angular.module('webApp')
  .service('restaurant', function () {
    var thisService = {};

    thisService.restaurantId = 1;

    return thisService;
  });
