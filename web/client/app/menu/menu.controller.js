'use strict';

angular.module('webApp')
  .controller('MenuCtrl', ['$scope', '$translate', '$location', 'restaurant', 'menu', 'subcategory', function ($scope, $translate, $location, restaurant, menu, subcategory) {
    $scope.message = 'Hello';

    menu.getMenuItems(restaurant.restaurantId).then(function(data) {
      $scope.menuItems = data.data;
      console.log($scope.menuItems);
    });

    $scope.goToSubcategory = function(category) {
      subcategory.category = category;
      $location.path('/subcategory');
    }

  }]);
