'use strict';

/**
 * @ngdoc overview
 * @name messMenuApp
 * @description
 * # messMenuApp
 *
 * Main module of the application.
 */
var app = angular.module('messMenuApp', [
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'firebase',
    'angularMoment'
  ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider

        .state('main', {
          url: '/',
          controller: 'MainCtrl',
          templateUrl: 'views/main.html',
        });
    }]);
