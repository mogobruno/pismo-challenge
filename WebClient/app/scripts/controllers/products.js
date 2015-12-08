'use strict';

/**
 * @ngdoc function
 * @name webClientApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the webClientApp
 */
angular.module('webClientApp')
  .controller('ProductsCtrl', function ($scope, $location, Products) {

	  	Products.query(function(products){
	  		$scope.products = products;
	  	});

	  	$scope.remove = function(product){
	  		var productId = product._id;
	  		product.$remove(
	  		function success(){
	  			$("#box".concat(productId)).remove();
	  			swal({
					title: "Produto removido!",
					text: "O produto foi removido com sucesso.",
					type: "success",
					confirmButtonText: "Ok" 
				});
	  		},
	  		function error(){
	  			swal({
					title: "Erro!",
					text: "Ocorreu um problema de comunicação com os nossos serviços, tente novamente mais tarde.",
					type: "error",
					confirmButtonText: "Ok" 
				});
	  		});
	  	}

	  	$scope.open = function(product){
	  		var productId = product._id;
	  		$location.path('/products/'.concat(productId));
	  	}

	  	$scope.create = function(){
	  		$location.path('/products/create');
	  	}

  });
