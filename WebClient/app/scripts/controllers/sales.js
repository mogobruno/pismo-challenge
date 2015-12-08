(function(){

'use strict';

/**
 * @ngdoc function
 * @name webClientApp.controller:SalesCtrl
 * @description
 * # SalesCtrl
 * Controller of the webClientApp
 */
angular.module('webClientApp')
  .controller('SalesCtrl', function ($location, Sales) {
    var vm = this;
  	Sales.query(function(sales){
  		console.log(sales);
  		vm.sales = sales;
  	});
  	
  	vm.create = function(){
  		$location.path('/sales/create');
  	}
  });
})()