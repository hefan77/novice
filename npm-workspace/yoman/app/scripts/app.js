'use strict';

/**
 * @ngdoc overview
 * @name yomanApp
 * @description
 * # yomanApp
 *
 * Main module of the application.
 */
angular
  .module('yomanApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.sortable',
	'LocalStorageModule'
  ])
   .config(['localStorageServiceProvider', function(localStorageServiceProvider){
       localStorageServiceProvider.setPrefix('ls');
   }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  .when('/howto', {
		  templateUrl:'views/howto.html',
		  controller: 'howtoCtrl',
		  controllerAs: 'howto'
	  })
      .otherwise({
        redirectTo: '/'
      });
  });