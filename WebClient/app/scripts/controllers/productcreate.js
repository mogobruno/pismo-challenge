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
  		var product = new Products();
  		product.type = "Unidade";
  		$scope.product = product;
		$scope.save = function(product){
			if($scope.isValid(product)){
				product.$save(
				function (success){ 
					$location.path('/products'); 
				},
				function (error){
					swal({
						title: "Erro!",
						text: "Ocorreu um problema de comunicação com os nossos serviços, tente novamente mais tarde.",
						type: "error",
						confirmButtonText: "Ok" 
					});
				});
			}
		}

		$scope.isValid = function(product){
			if(product.name.length <= 50 &&
			   product.description.length <= 250 &&
			   (product.type === "Peca"  ||
			   product.type === "Caixa" ||
			   product.type === "Unidade")){
				return true;
			}
			return false;
		}
  });