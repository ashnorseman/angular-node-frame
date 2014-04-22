'use strict';

angular.module('angularNodeFrameApp')
  .controller('HeaderCtrl', function ($scope, User) {
    var username = "ash";

    $scope.profile = User.get({
      name: username
    });
  });
