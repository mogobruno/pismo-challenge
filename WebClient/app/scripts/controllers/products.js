'use strict';

/**
 * @ngdoc function
 * @name webClientApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the webClientApp
 */
angular.module('webClientApp')
  .controller('ProductsCtrl', function ($scope, Products) {

	  	Products.query(function(products){
	  		$scope.products = products;
	  	});

  });
