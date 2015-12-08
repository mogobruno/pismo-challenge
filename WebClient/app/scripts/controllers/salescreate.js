'use strict';

/**
 * @ngdoc function
 * @name webClientApp.controller:SalescreateCtrl
 * @description
 * # SalescreateCtrl
 * Controller of the webClientApp
 */
angular.module('webClientApp')
  .controller('SalescreateCtrl', function ($scope, $location, Products, Sales) {
   
    var sales = new Sales();
    sales.total = 0;
  	$scope.sales = sales;

	var addProductsToSale = function(){
  		$scope.sales.products = [];
  		for(var index in $scope.products){
  			var product = $scope.products[index];
  			if(product.salesAmount > 0){
  				$scope.sales.products.push(product);
  			}
  		}
  		console.log(sales);
  	}

	Products.query(function(products){
		$scope.products = products;
	});

  	$scope.calculateTotal = function(){
  		$scope.sales.total = 0;
  		for(var index in $scope.products){
  			if($scope.products[index].name){
	  			var product = $scope.products[index];
	  			var salesAmount = product.salesAmount || 0;
	  			$scope.sales.total += parseFloat(product.value) * parseFloat(salesAmount);
  			}
  		}
  		addProductsToSale()
  	}

  	$scope.save = function(sales){
      if($scope.isValid(sales)){
  			sales.$save(
  			function (success){ 
  				$location.path('/sales'); 
  			},
  			function (error){
  				swal({
  					title: "Erro!",
  					text: "Ocorreu um problema de comunicação com os nossos serviços, tente novamente mais tarde.",
  					type: "error",
  					confirmButtonText: "Ok" 
  				});
  			});
      }else{
        swal({
          title: "Erro!",
          text: "É necessário 1 produto para efetuar a venda",
          type: "error",
          confirmButtonText: "Ok" 
        });
      }
		}

    $scope.isValid = function(sales){
      if(sales.total > 0){
        return true;
      }
      for (var index in sales.products){
        var product = sales.products[index];
        if(product.amount >= product.salesAmount){
          return true;
        }
      }
      
      return false;
    }

  });
