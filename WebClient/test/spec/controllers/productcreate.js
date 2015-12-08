'use strict';

describe('Controller: ProductcreateCtrl', function () {

  // load the controller's module
  beforeEach(module('webClientApp'));

  var ProductcreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductcreateCtrl = $controller('ProductcreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductcreateCtrl.awesomeThings.length).toBe(3);
  });
});
