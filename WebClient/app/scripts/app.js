'use strict';

/**
 * @ngdoc overview
 * @name webClientApp
 * @description
 * # webClientApp
 *
 * Main module of the application.
 */
angular
  .module('webClientApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'productsVm'
      })
      .when('/products/create', {
        templateUrl: 'views/productcreate.html',
        controller: 'ProductcreateCtrl',
        controllerAs: 'productcreateVm'
      })
      .when('/products/:id', {
        templateUrl: 'views/productdetail.html',
        controller: 'ProductdetailCtrl',
        controllerAs: 'productdetailVm'
      })
      .when('/sales', {
        templateUrl: 'views/sales.html',
        controller: 'SalesCtrl',
        controllerAs: 'salesVm'
      })
      .when('/sales/create', {
        templateUrl: 'views/salescreate.html',
        controller: 'SalescreateCtrl',
        controllerAs: 'salescreateVm'
      })
      .otherwise({
        redirectTo: '/products'
      });
  })
  .value('WebApiURL', "http://localhost:8080/api");
