/**
 * Created by ionelmerca on 07.10.2015.
 */
app.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
  $scope.data = {};

  $scope.login = function() {

    Ionic.io();

    var push = new Ionic.Push({
      "debug": true
    });

    // register for push notifications if the user can login
    push.register(function(token) {

      LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
        $state.go('tab.chats');



      }).error(function(data) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });

      console.log("Device token:",token.token);
    });

  }
});