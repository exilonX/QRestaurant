/**
 * Created by ionelmerca on 14.10.2015.
 */
app.controller('TableCtrl', function ($scope, $http, api, Tables) {
  $scope.url = api + 'restaurants/tables/';
  $scope.data = {};

  $scope.data.tables = [];


  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true;

  $http.get($scope.url + 'Restaurant 1')
    .success(function (data) {
      for (var table in data)
        data[table].notify = false;

      $scope.data.tables = data;

    })
    .error(function (err) {
      console.log("Error" + err.message);
    });

  $scope.change = function(table) {
    if (table.notify == true) {
      Tables.pushTable(table.id);
    } else {
      Tables.popTable(table.id);
    }
  };

});