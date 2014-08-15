'use strict';

/**
 * @ngdoc function
 * @name messMenuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messMenuApp
 */
angular.module('messMenuApp')
  .controller('MainCtrl', ['$scope', '$firebase', function ($scope, $firebase) {

    var menu = new Firebase("https://mess-menu.firebaseio.com/");
    $scope.menuList = $firebase(menu);
    $scope.menu = $scope.menuList.$asArray();
    console.log($scope.menu);

    $scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  }]);
