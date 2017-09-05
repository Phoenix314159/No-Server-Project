angular.module('myApp').controller('calculatorController', function ($scope, calcService) {

    calcService.getOperators().then(res => {
        $scope.operators = calcService.operators;
        $scope.result = () => {
            return calcService.calculate($scope.a, $scope.b, $scope.operator);
        }
    })
});
