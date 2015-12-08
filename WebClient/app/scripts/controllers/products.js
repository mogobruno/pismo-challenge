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
	  			alert("Item removido");
	  		},
	  		function error(){
	  			alert("Erro de comunicação com o servidor");
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
