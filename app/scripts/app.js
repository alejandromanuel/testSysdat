'use strict';

/**
 *Cuando haces unareferncia este modulo lo coje y llama el view que es es necesario y el controller que es necesario
 * Main module of the application.
 */
angular
  .module('SysdatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'MainCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/members', {
        templateUrl: 'views/members.html',
        controller: 'MembersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
