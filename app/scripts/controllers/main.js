'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('SysdatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Item1',
      'Item2'
    ];
    $scope.addTodo = function () {
  $scope.todos.push($scope.todo);
  $scope.todo = '';
};
  });
