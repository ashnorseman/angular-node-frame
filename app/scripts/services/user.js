'use strict';

angular.module('angularNodeFrameApp')
  .factory('User', function ($resource) {
    return $resource('/user/:name', {
      name: '@name'
    }, { //parameters default
//      update: {
//        method: 'PUT',
//        params: {}
//      },
//      get: {
//        method: 'GET',
//        params: {
//          id:'me'
//        }
//      }
	  });
  });
