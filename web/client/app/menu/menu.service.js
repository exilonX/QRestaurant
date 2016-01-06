/**
 * Created by andreeab on 20.10.2015.
 */
angular.module('webApp')
  .service('menu', ['$http', 'menuConstants', function($http, menuConstants) {
    var thisService = {};

    thisService.getMenuItems = function getMenuItems(restaurant_id) {
      return $http.get(menuConstants.GET_CATEGORIES + restaurant_id)
        .success(function(data) {
          console.log("Menu service - menu categories: ", data);
        })
        .error(function(data, status) {
          console.log("Error in loading menu items", data, status);
        });
    };

    return thisService;
  }]);
