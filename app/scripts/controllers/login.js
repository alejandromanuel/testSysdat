'use strict';

/**
 * @ngdoc function
 * @name SysdatApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of login
 */



var app = angular.module('SysdatApp', []);

app.controller('LoginCtrl', function($scope, $log, $cookieStore, $location) {

var receivedJSON = {
    "login": 0,
    "user_id": 123,
    "first_name": "Lolo",
    "last_name": "Bond",
    "privileges": {
        "member _view": 1,
        "member_create": 1,
        "member_edit": 1,
        "role_assign": 1,
        "role_change": 1,
        "activity_create": 1,
        "activity_edit": 1,
        "activity_search": 1,
        "activity_view": 1,
        "input_attendance": 1,
        "executive_report_generate": 0,
        "executive_report_view": 0,
        "progress_report_upload": 0,
        "progress_report_download": 0,
        "progress_report_approve": 1,
        "expenses_report_upload": 0,
        "notify_staff": 1,
        "notify_pi": 1,
        "notify_copi": 1,
        "notify_facpost": 1,
        "notify_students": 1,
        "notify_affcontrib": 1
    }
};

    $scope.loginSesion = function() {
        if ($scope.email == "lolo@gmail.com" && $scope.password == "bond") {
            //success
            receivedJSON.login = 1;

        } else {
            //failed
            receivedJSON.login = 0;
        }
    };
});