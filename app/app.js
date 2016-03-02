'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider    
        .when('/', 
            {
            controller: 'mainCtrl',
            templateUrl: 'partials/main.html' 
            })
        .when('/users', 
            {                
            controller: '',
            templateUrl: '' 
            })        
        .otherwise({redirectTo: '/'});
}]);