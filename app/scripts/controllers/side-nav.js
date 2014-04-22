'use strict';

angular.module('angularNodeFrameApp')
  .controller('SideNavCtrl', function ($rootScope, $scope, Menu) {

    $scope.menu = Menu.query();

    $scope.openMenu = function (menuName) {
      Menu.get({
        name: menuName
      }, function (data) {
        $rootScope.$broadcast("changeContent", data);
      });
    }
  });
