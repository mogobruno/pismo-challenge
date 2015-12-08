(function(){

'use strict';

/**
 * @ngdoc function
 * @name webClientApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the webClientApp
 */
angular.module('webClientApp')
  .controller('ProductsCtrl', function ($location, Products) {

  		var vm = this;

	  	Products.query(function(products){
	  		vm.products = products;
	  	});

	  	vm.remove = function(product){
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

	  	vm.open = function(product){
	  		var productId = product._id;
	  		$location.path('/products/'.concat(productId));
	  	}

	  	vm.create = function(){
	  		$location.path('/products/create');
	  	}

  });
})()