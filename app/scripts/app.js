'use strict';

/**
 *Cuando haces unareferncia este modulo lo coje y llama el view que es es necesario y el controller que es necesario
 * Main module of the application.
 */
(function() {
var app = angular.module('SysdatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch']);
var userInfo = {"user_id":1, 
"first_name": "Jaquelina", 
"last_name": "Alvarez",
"privileges": 
        {"member _view": 1,
        "member_create":1, 
        "member_edit":1,
        "role_assign":1, 
        "role_change":1, 
        "activity_create":1, 
        "activity_edit":1, 
        "activity_search":1, 
        "activity_view":1, 
        "input_attendance":1, 
        "executive_report_generate":0,
        "executive_report_view":0,
        "progress_report_upload":0, 
        "progress_report_download":0,
        "progress_report_approve":0,
        "expenses_report_upload":1, 
        "notify_staff":1, 
        "notify_pi":1, 
        "notify_copi":1,
        "notify_facpost":1, 
        "notify_students":1, 
        "notify_affcontrib":1
        }
};

var currentlyViewing = "Profile";

app.controller('topBarController', function(){
  //this.currentSelection = "Profile";
  this.privileges = userInfo.privileges;
  this.reportManVisible = function(){
    return this.privileges.executive_report_view || this.privileges.executive_report_generate ||
    this.privileges.expenses_report_upload;
  }
  this.progReportsVisible = function(){
    return this.privileges.progress_report_upload || this.privileges.progress_report_download ||
    this.privileges.progress_report_approve;
  }
  this.getUserName = function(){//Esto no deberia estar aqui.(controller aparte?)
    return userInfo.first_name + " " + userInfo.last_name;
  }
  this.select = function(newSelection){
    currentlyViewing = newSelection;
  };

  this.isSelected = function(selectionName){
    return currentlyViewing == selectionName;
  };
});

app.controller('notificationsController', function(){

  this.amount = function(){
    return 4;
  };
});

app.controller('leftBarController', function(){

  this.select = function(newSelection){
    this.currentSelection = newSelection;
  };

  this.isSelected = function(selectionName){
    return this.currentSelection == selectionName;
  };
});

app.config(function ($routeProvider) {
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
})();