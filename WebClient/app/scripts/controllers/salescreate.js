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
			sales.$save(
			function success(success){ 
				$location.path('/sales'); 
			},
			function error(error){
				swal({
					title: "Erro!",
					text: "Ocorreu um problema de comunicação com os nossos serviços, tente novamente mais tarde.",
					type: "error",
					confirmButtonText: "Ok" 
				});
			});
		}

  });
