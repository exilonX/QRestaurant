'use strict';

angular.module('webApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menu', {
        url: '/client/meniu',
        templateUrl: 'app/menu/menu.html',
        controller: 'MenuCtrl'
      });
  });

