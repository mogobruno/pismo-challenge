(function(){

'use strict';

/**
 * @ngdoc service
 * @name webClientApp.sales
 * @description
 * # sales
 * Factory in the webClientApp.
 */
angular.module('webClientApp')
  .factory('Sales', function ($resource, WebApiURL) {
    return $resource(WebApiURL.concat('/sales/:id'), {id: '@_id'}, {
      update:{
        method: 'PUT'
      }
    });
  });
})()