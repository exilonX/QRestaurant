/**
 * Created by andreeab on 20.10.2015.
 */
/**
 * Created by andreeab on 20.10.2015.
 */
angular.module('webApp')
  .service('subcategory', ['$http', 'subcategoryConstants', 'webStorage', function($http, menuConstants, webStorage) {
    var thisService = {};

   var category = undefined;

    thisService.setCategory = function setCategory(category) {
      category = this.category;
    }

    thisService.getSubcategories = function getSubcategories(restaurant_id, category) {
      if (!category) category = '';
      return $http.get(menuConstants.GET_SUBCATEGORIES + restaurant_id + '/' + category)
        .success(function(data) {
          console.log("Menu service - menu subcategories: ", data);
        })
        .error(function(data, status) {
          console.log("Error in loading menu subcategories", data, status);
        });
    };

    return thisService;
  }]);
