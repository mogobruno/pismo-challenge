'use strict';

describe('Controller: SalescreateCtrl', function () {

  // load the controller's module
  beforeEach(module('webClientApp'));

  var SalescreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SalescreateCtrl = $controller('SalescreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SalescreateCtrl.awesomeThings.length).toBe(3);
  });
});
