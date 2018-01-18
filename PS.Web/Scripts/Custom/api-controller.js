var app = angular.module('MyApp', [])
app.controller('ApiController', function ($scope, $http, $window) {
    $scope.List = [];
    $scope.Current = 0;
    $scope.Size = 20;

    $scope.GetNext = function () {
        $http({
            method: "GET",
            url: "/api/Address?count=" + $scope.Size + "&start=" + $scope.Current,
            dataType: 'json',
            headers: { "Content-Type": "application/json" }
        }).then(function mySuccess(response) {

            if ($scope.Current == 0)
                $scope.List = response.data;
            else {
                for (var i = 0; i < response.data.length;i++)
                    $scope.List.push(response.data[i]);
            }
            $scope.Current += $scope.Size;

            console.log("response:");
            console.log(response);
            console.log("List: ");
            console.log($scope.List);

        }, function myError(response) {
            $window.alert(response.Message);
        });
    }

    $scope.Delete = function ($event) {
        var id = $event.target.id.split('_')[1];
        $http({
            method: "DELETE",
            url: "/api/Address",
            dataType: 'json',
            data: id,
            headers: { "Content-Type": "application/json" }
        }).then(function mySuccess(response) {

        }, function myError(response) {
            
        });
    }

    $scope.GetNext();
});