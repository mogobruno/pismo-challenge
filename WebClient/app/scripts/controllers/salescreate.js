(function(){

'use strict';

/**
 * @ngdoc function
 * @name webClientApp.controller:SalescreateCtrl
 * @description
 * # SalescreateCtrl
 * Controller of the webClientApp
 */
angular.module('webClientApp')
  .controller('SalescreateCtrl', function ($location, Products, Sales) {
    var vm = this;

    var sales = new Sales();
    sales.total = 0;
  	vm.sales = sales;

  	var addProductsToSale = function(){
    		vm.sales.products = [];
    		for(var index in vm.products){
    			var product = vm.products[index];
    			if(product.salesAmount > 0){
    				vm.sales.products.push(product);
    			}
    		}
    		console.log(sales);
    	}

  	Products.query(function(products){
  		vm.products = products;
  	});

    	vm.calculateTotal = function(){
    		vm.sales.total = 0;
    		for(var index in vm.products){
    			if(vm.products[index].name){
  	  			var product = vm.products[index];
  	  			var salesAmount = product.salesAmount || 0;
  	  			vm.sales.total += parseFloat(product.value) * parseFloat(salesAmount);
    			}
    		}
    		addProductsToSale()
    	}

    	vm.save = function(sales){
        if(vm.isValid(sales)){
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

      vm.isValid = function(sales){
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
})()