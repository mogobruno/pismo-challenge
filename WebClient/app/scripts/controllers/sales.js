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
  .controller('SalesCtrl', function ($scope, $location, Sales) {
  	Sales.query(function(sales){
  		console.log(sales);
  		$scope.sales = sales;
  	});
  	
  	$scope.create = function(){
  		$location.path('/sales/create');
  	}
  });
})()