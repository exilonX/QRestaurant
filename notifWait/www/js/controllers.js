var starter = angular.module('starter.controllers', [])

  .controller('TabCtrl', function ($scope, $state) {
    $scope.onSlideChanged = function onSlideChanged(index) {
      switch (index) {
        case 0 :
          $state.go('tab.chats');
          break;
        case 1 :
          $state.go('tab.dash');
          break;
        case 2 :
          $state.go('tab.account');
          break;
      }
    }
  })

  .constant('api', 'http://localhost:9000/api/')

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  });
