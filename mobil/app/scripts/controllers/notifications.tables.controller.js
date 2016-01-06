/**
 * Created by ionelmerca on 20.10.2015.
 */

starter.controller('DashCtrl', function ($scope, $state, $http, api, Tables) {
  var url = api + 'orders/notification/table/561d6c78609f6806539a6b7f';

  $scope.notification = {};

  // initialize the controller on first load
  $scope.$on('$ionicView.enter', function() {
    initialize();
  });

  var initialize = function() {
    getTableNotifications(Tables.getTables());

    // register for instant updates
    Tables.registerUpdate('DashCtrl', $scope);
  };

  // get notifications for certain tables
  var getTableNotifications = function(tables) {
    var tableUrl = url + '?tables=' + JSON.stringify(tables);

    $http.get(tableUrl)
      .success(function(data) {
        $scope.notification = data;
      })
      .error(function(err) {
        console.log("Error " + err.message);
      });
  }

  // listen from updates from the service
  $scope.$on('tables:update', function(event, tables) {
    getTableNotifications(tables);
  });

});