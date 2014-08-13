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
    // $scope.menu = $scope.menu[$scope.menu.length - 1];
    console.log($scope.menu);

    // var messMenu = {
    // updated_on: Date(),
    //   menuLists: [
    //     {
    //       'day': 'Monday',
    //       'breakfast': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'lunch': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'dinner': ['Paneer Tikka Masala', 'Hara Bhara Kabab']
    //     },
    //     {
    //       'day': 'Tuesday',
    //       'breakfast': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'lunch': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'dinner': ['Paneer Tikka Masala', 'Hara Bhara Kabab']
    //     },
    //     {
    //       'day': 'Wednesday',
    //       'breakfast': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'lunch': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'dinner': ['Paneer Tikka Masala', 'Hara Bhara Kabab']
    //     },
    //     {
    //       'day': 'Thursday',
    //       'breakfast': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'lunch': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'dinner': ['Paneer Tikka Masala', 'Hara Bhara Kabab']
    //     },
    //     {
    //       'day': 'Friday',
    //       'breakfast': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'lunch': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'dinner': ['Paneer Tikka Masala', 'Hara Bhara Kabab']
    //     },
    //     {
    //       'day': 'Saturday',
    //       'breakfast': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'lunch': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'dinner': ['Paneer Tikka Masala', 'Hara Bhara Kabab']
    //     },
    //     {
    //       'day': 'Sunday',
    //       'breakfast': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'lunch': ['Paneer Tikka Masala', 'Hara Bhara Kabab'],
    //       'dinner': ['Paneer Tikka Masala', 'Hara Bhara Kabab']
    //     },
    //   ],
    // }

    // $scope.menuList.$push(messMenu);

  }]);
