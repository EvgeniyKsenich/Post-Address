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

        }, function myError(response) {
            $window.alert(response.Message);
        });
    }

    $scope.Delete = function ($event) {
        var id = $event.target.id.split('_')[1];
        var index = -1;
        for (var i = 0; i < $scope.List.length; i++) {
            if ($scope.List[i].id == id) {
                index = i;
                break;
            }
        }

        $http({
            method: "DELETE",
            url: "/api/Address/" + id,
            dataType: 'json',
            headers: { "Content-Type": "application/json" }
        }).then(function mySuccess(response) {
            $scope.List.splice(index, 1);
            console.log("Deleted  id:" + id + "; By index:" + index);
        }, function myError(response) {
            $window.alert(response.Message);
        });
    }

    $scope.GetNext();
});