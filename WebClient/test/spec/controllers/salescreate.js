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

  it('Verificar se uma venda sem produto e invalida', function () {
    var sales = {
      total: 0,
      products: []
    }
    expect(SalescreateCtrl.isValid(sales)).toBe(false);
  });

  it('Verificar se uma venda com produto e valida', function () {
    var sales = {
      total: 10,
      products: [
        {amount: 12, salesAmount: 1}
      ]
    }
    expect(SalescreateCtrl.isValid(sales)).toBe(true);
  });
});
