app.controller("navigationController", ['$scope','$cookies','$state' ,function ($scope,$cookies,$state) {
    //
    $scope.first_name = $cookies.get('first_name');
    $scope.last_name = $cookies.get('last_name');
   
}]);