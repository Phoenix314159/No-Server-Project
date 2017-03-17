angular.module('myApp').controller('randomController', function ($scope, mainService) {
    $scope.result = function(){
        if($scope.c > $scope.d){
            $scope.number = 'Please enter a valid range';
        }
        $scope.number = mainService.random($scope.c, $scope.d);
    }

});
