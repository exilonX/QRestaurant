'use strict';

angular.module('webApp')
  .controller('SubcategoryCtrl', ['$scope', '$location', 'restaurant', 'subcategory', function ($scope, $location, restaurant, subcategory) {

    var category_name = subcategory.category ? subcategory.category.category_name : '';
    subcategory.getSubcategories(restaurant.restaurantId, category_name).then(function(data) {
      $scope.subcategories = data.data;
      console.log($scope.subcategories);
    });

    $scope.goToMainMenu = function goToMainMenu() {
      $location.path('/client/meniu');
    }

  }]);
