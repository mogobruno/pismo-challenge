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

  it('Verificar se um produto com nome maior que 50 caracteres e invalido', function () {
    var product = {
      name:"um nome muito grande não pode ser considerado um nome valido, pois a quantidade de caracteres ultrapassa o limite permitido pelo sistema.",
      value: 100,
      description:"Descrição do produto",
      amount: 123,
      type: "Unidade"
    }
    expect(ProductcreateCtrl.isValid(product)).toBe(false);
  });

  it('Verificar um produto com todos os campos dentro dos valores validos', function () {
    var product = {
      name:"Caneta",
      value: 100,
      description:"Descrição do produto",
      amount: 123,
      type: "Unidade"
    }
    expect(ProductcreateCtrl.isValid(product)).toBe(true);
  });

  it('Verificar se um produto com descrição maior que 250 caracteres e invalido', function () {
    var product = {
      name:"Caneta",
      value: 100,
      description:"Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produtoDescrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto Descrição do produto",
      amount: 123,
      type: "Unidade"
    }
    expect(ProductcreateCtrl.isValid(product)).toBe(false);
  });

  it('Verificar se um produto com tipo diferente de "Unidade", "Caixa" ou "Peca" e invalido', function () {
    var product = {
      name:"Caneta",
      value: 100,
      description:"Descrição do produto",
      amount: 123,
      type: "Metros"
    }
    expect(ProductcreateCtrl.isValid(product)).toBe(false);
  });
});

