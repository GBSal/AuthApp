﻿app_anon.controller('LoginController', function ($scope, $http)
{
  
    $scope.doLogin = function () {
      
        var data = { Username: $scope.Username, Password: $scope.Password, RememberMe: !!$scope.RememberMe };
        
         var url = 'http://192.168.1.2:62404/api/Values/Get';
        //var url = '/api/Values';
    
        $http({ method: "POST", url: url, data: data })

          .success(function (data, status, headers, config) {

              if (status === 200) {
                  window.location.replace("main.html");
              }

          }).error(function (data, status, headers, config) {

              alert(data);

          });
        
    };

    

});
