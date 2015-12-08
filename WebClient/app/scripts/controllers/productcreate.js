(function(){
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
  		var vm = this;
  		var product = new Products();
  		product.type = "Unidade";
  		vm.product = product;
		vm.save = function(product){
			if(vm.isValid(product)){
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

		vm.isValid = function(product){
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

})()