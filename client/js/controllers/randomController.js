angular.module('myApp').controller('randomController', function ($scope, randomService) {

    $scope.result = () => {
        $scope.number = randomService.random12(parseInt($scope.c), parseInt($scope.d));
    }
    $scope.showText = false;

});
