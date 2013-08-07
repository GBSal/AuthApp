var app_anon = angular.module('MyAppAnon', []);

app_anon.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'LoginController',
                templateUrl: 'webparts/login.html'
            })
        .when('/forgotpassword',
            {
                controller: 'LoginController',
                templateUrl: 'webparts/forgotpassword.html'
            })

        .otherwise({ redirectTo: '/' });
});


