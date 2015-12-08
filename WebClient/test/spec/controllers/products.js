'use strict';

describe('Controller: ProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('webClientApp'));

  var ProductsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, Products) {
    scope = $rootScope.$new();
    ProductsCtrl = $controller('ProductsCtrl', {
      $scope: scope,
      Products: Products
    });
  }));

  it('Product detail url', function () {
    ProductsCtrl.$scope.open({
      _id:"5666f0f96e50ec441800000d"   
    })
    expect(window.location.hash).toBe("#/products/5666f0f96e50ec441800000d");
  });

  it('Product create url', function () {
    ProductsCtrl.$scope.create()
    expect(window.location.hash).toBe("#/products/create");
  });
});
