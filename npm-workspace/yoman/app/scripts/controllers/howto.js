'use strict'
/**
* @ngdoc function
* @name yomanApp.controller:hotoCtrl
* @description
* # howtoCtrl
* Controller of the yomanApp
*/
angular.module('yomanApp')
  .controller('howtoCtrl', function($scope) {
	  $scope.steps =  [
		"1.Node Install",
		"2.Git Install",
		"3.Environment Config",
		"4.Yoman Install -> $ npm install --global yo ->check $ yo --version && bower --version && grunt --version",
		"5.Generator Install ->	$ yo -> or use $ npm install -g generator-angular ->or use $ npm install -g generator-angular@0.7.1",
		"6.Angular project create ->$ yo angular",
		"7.$npm install, $bower install",
		"8.Run server -> $grunt serve",
		""
	  ];
	  $scope.GotoRef = function(){
		  window.open("http://blog.jobbole.com/65399/","_self")
	  };
  })