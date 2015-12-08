(function(){
'use strict';

/**
 * @ngdoc service
 * @name webClientApp.Products
 * @description
 * # Products
 * Factory in the webClientApp.
 */
angular.module('webClientApp')
  .factory('Products', function ($resource, WebApiURL) {
    return $resource(WebApiURL.concat('/products/:id'), {id: '@_id'}, {
      update:{
        method: 'PUT'
      }
    });
  });
})()