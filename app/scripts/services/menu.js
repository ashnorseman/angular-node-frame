'use strict';

angular.module('angularNodeFrameApp')
  .factory('Menu', function ($resource) {
    return $resource('/menu/:name', {
      name: '@name'
    }, {
      query: {
        method: "GET",
        name: "",
        isArray: true
      }
    });
  });
