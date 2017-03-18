angular.module('myApp').controller('randomController', function ($scope, mainService) {
    $scope.result = () => {
        if(parseInt($scope.c)> parseInt($scope.d)){
            $scope.number = 'Please enter a valid range';
        }
        $scope.number = mainService.random12(parseInt($scope.c), parseInt($scope.d));
    }

});
