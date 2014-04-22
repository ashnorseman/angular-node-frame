'use strict';

angular.module('angularNodeFrameApp')
  .controller('SideNavCtrl', function ($rootScope, $scope, Menu) {

    function deActivate(tab) {
      tab.active = false;
    }

    $rootScope.tabs = [];

    $scope.menu = Menu.query();

    $rootScope.openMenu = function (menuName) {

      var oldTab = $rootScope.tabs.filter(function (tab) {
        if (tab.name === menuName) {
          return true;
        }
      })[0];

      if (oldTab) {
        $rootScope.tabs.forEach(deActivate);
        oldTab.active = true;
      } else {
        Menu.get({
          name: menuName
        }, function (newTab) {
          newTab.active = true;
          $rootScope.tabs.forEach(deActivate);
          $rootScope.tabs.push(newTab);
        });
      }
    }
  });
