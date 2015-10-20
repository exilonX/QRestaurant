'use strict';

describe('Controller: SubcategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var SubcategoryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubcategoryCtrl = $controller('SubcategoryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
