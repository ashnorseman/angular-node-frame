'use strict';

angular.module('angularNodeFrameApp')
  .controller('MainCtrl', function ($scope) {

    // ng-includes
    $scope.common = {
      header: "commons/header.html",
      sideNav: "commons/side-nav.html",
      content: "commons/content.html",
      footer: "commons/footer.html"
    };
  });
