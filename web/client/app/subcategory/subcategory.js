/**
 * Created by andreeab on 20.10.2015.
 */
angular.module('webApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('subcategory', {
        url: '/subcategory',
        templateUrl: 'app/subcategory/subcategory.html',
        controller: 'SubcategoryCtrl'
      });
  });
