'use strict';

/**
 * @ngdoc function
 * @name yomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yomanApp
 */
/*
angular.module('yomanApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/
angular.module('yomanApp')
	.controller('MainCtrl', function($scope,localStorageService) {
		//$scope.todos = ['Item 1','Item 2','Item 3'];//memory store
		//local storage try
		var todosInStore = localStorageService.get('todos');
		$scope.todos = todosInStore && todosInStore.split('\n')||[];
		$scope.$watch('todos', function(){
			localStorageService.add('todos',$scope.todos.join('\n'));
		}, true);
		$scope.addTodo = function () {
		   $scope.todos.push($scope.todo);
		   $scope.todo = '';
		 };
		$scope.removeTodo = function(index){
			$scope.todos.splice(index, 1);
		};
	});