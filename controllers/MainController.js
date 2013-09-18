app.controller('MainController', function ($scope, $http, $cookies)
{
    $http.defaults.withCredentials = true;

    init();


    function init() {

        var url = 'http://192.168.1.2:62404/api/Values/Get';

    //    var url = '/api/Values/Get';
        $http({ method: "GET", url: url, data: {} })

            .success(function (data, status, headers, config) {

                if (status === 200) {
                    $scope.UserRoles = data;
                }

            }).error(function (data, status, headers, config) {

                alert("Error loading data: " + status);

            });
    }


    $scope.GetAllRoles = function () {

        var url = 'http://192.168.1.2:62404/api/Values/GetAllRoles';
      //  var url = '/api/Values/GetAllRoles';

        $http({ method: "GET", url: url, data: {} })

            .success(function (data, status, headers, config) {

                if (status === 200) {
                    $scope.AllUserRoles = data;
                }

            }).error(function (data, status, headers, config) {

                alert("Error loading data: " + status);

            });


    }
});
