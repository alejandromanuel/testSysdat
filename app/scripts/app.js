var app = angular.module('SysdatApp', ['ngRoute']);
 
// routes
app.config(function($routeProvider) {
    $routeProvider
 
        // route for the home page
        .when('/', {
            templateUrl : 'views/contact.html',
            controller  : 'mainController'
        })
 
        // route for the about page
        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'aboutController'
        })
 
        // route for the service page
        .when('/main', {
            templateUrl : 'views/main.html',
            controller  : 'serviceController'
        });
 
});
 
// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.info = 'Welcome to Oodles';
});
 
app.controller('aboutController', function($scope) {
    $scope.info = 'About Oodles';
});
 
app.controller('serviceController', function($scope) {
    $scope.info = 'Service';
});