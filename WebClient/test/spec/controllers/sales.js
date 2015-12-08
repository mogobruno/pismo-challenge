'use strict';

describe('Controller: SalesCtrl', function () {

  // load the controller's module
  beforeEach(module('webClientApp'));

  var SalesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SalesCtrl = $controller('SalesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SalesCtrl.awesomeThings.length).toBe(3);
  });
});
