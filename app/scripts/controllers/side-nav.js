'use strict';

angular.module('angularNodeFrameApp')
  .controller('SideNavCtrl', function ($scope, Menu) {

    $scope.menu = Menu.query();
  });
