'use strict';

/**
 * @ngdoc function
 * @name messMenuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messMenuApp
 */
angular.module('messMenuApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
