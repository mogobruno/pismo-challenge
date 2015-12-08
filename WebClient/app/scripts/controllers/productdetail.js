(function(){

'use strict';

/**
 * @ngdoc function
 * @name webClientApp.controller:ProductdetailCtrl
 * @description
 * # ProductdetailCtrl
 * Controller of the webClientApp
 */
angular.module('webClientApp')
  .controller('ProductdetailCtrl', function ( $routeParams, Products) {

    var vm = this;

  	Products.get({ id: $routeParams.id }, function(product){
  		vm.product = product;
  	})

  	vm.save = function(product){
  		product.$update({ id: $routeParams.id }, 
  		function (success){
  			vm.productEdit = false;
  		},
  		function (error){
  			vm.productEdit = false;
  		})
  	}

  });
})()