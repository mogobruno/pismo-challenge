'use strict';

/**
 * @ngdoc function
 * @name webClientApp.controller:ProductdetailCtrl
 * @description
 * # ProductdetailCtrl
 * Controller of the webClientApp
 */
angular.module('webClientApp')
  .controller('ProductdetailCtrl', function ($scope, $routeParams, Products) {

  	Products.get({ id: $routeParams.id }, function(product){
  		$scope.product = product;
  	})

  	$scope.save = function(product){
  		product.$update({ id: $routeParams.id }, 
  		function (success){
  			$scope.productEdit = false;
  		},
  		function (error){
  			$scope.productEdit = false;
  		})
  	}

  });
