'use strict';

angular.module('angularNodeFrameApp')
  .controller('ContentCtrl', function ($scope) {

    $scope.$on("changeContent", function (event, data) {
      $scope.title = data.showName;
      $scope.uri = data.uri;
    });
  });
