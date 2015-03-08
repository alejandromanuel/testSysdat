var app = angular.module('SysdatApp', ['ngRoute']);
 
// routes
app.config(function($routeProvider) {
    $routeProvider
 
        // route for the home page
        .when('/contact', {
            templateUrl : 'views/contact.html',
            controller  : 'contController'
        })
 
        // route for the about page
        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'aboutController'
        })
 
        // route for the service page
        .when('/main', {
            templateUrl : 'views/main.html',
            controller  : 'mainController'
        });
 
});
 
// create the controller and inject Angular's $scope
app.controller('contController', function($scope) {
    // create a message to display in our view
    $scope.info = 'Contact';
});
 
app.controller('aboutController', function($scope) {
    $scope.info = 'About';
});
 
app.controller('mainController', function($scope) {
    $scope.info = 'Main';
});