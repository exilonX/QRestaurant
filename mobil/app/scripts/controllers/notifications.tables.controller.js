/**
 * Created by ionelmerca on 20.10.2015.
 */

starter.controller('DashCtrl', function ($scope, $state, $http, api, Tables) {
  var url = api + 'orders/notification/table/561d6c78609f6806539a6b7f';


  console.log(url);

  $scope.notification = {};

  $scope.$on('$ionicView.enter', function() {
    initialize();
  });

  var initialize = function() {
    getTableNotifications();
  };

  var getTableNotifications = function() {
    var tableUrl = url + '?tables=' + JSON.stringify(Tables.getTables());

    $http.get(tableUrl)
      .success(function(data) {
        $scope.notification = data;
      })
      .error(function(err) {
        console.log("Error " + err.message);
      });
  }


});