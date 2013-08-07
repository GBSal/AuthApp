var app = angular.module('MyApp', ['ngCookies']);

app.config(function ($compileProvider, $routeProvider) {
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|file|content):/); //(/^\s*(https?|ftp|mailto|file|tel|content):/);

    $routeProvider
        .when('/',
            {
                controller: 'MainController',
                templateUrl: 'webparts/home.html'
            })
        .otherwise({ redirectTo: '/' });
});
