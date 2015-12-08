'use strict';

/**
 * @ngdoc function
 * @name webClientApp.controller:ProductcreateCtrl
 * @description
 * # ProductcreateCtrl
 * Controller of the webClientApp
 */
angular.module('webClientApp')
  .controller('ProductcreateCtrl', function ($scope, $location, Products) {
  		$scope.product = new Products();
		$scope.save = function(product){
			product.$save(
			function success(success){
				$location.path('/products');
			},
			function error(error){
				alert('Erro ao tentar cadastrar produto');
			})
		}
  });
