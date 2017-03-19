angular.module('myApp').controller('calculatorController', function ($scope, calcService) {

    $scope.operators = calcService.operators;

    $scope.result = () => {

        if (isNaN($scope.a) || isNaN($scope.b)) {
            return 'please enter a number';
        }
        else if ($scope.operator === 'CLEAR') {
            return $scope.a = $scope.b = null;
        }
        else if ($scope.operator == '+') {
            $scope.x = Number($scope.a) + Number($scope.b);
            return $scope.x;
        }
        else if ($scope.operator === '-') {
            return $scope.a - $scope.b;
        }
        else if ($scope.operator === '*') {
            return $scope.a * $scope.b;
        }
        else if ($scope.operator === '/') {
            return $scope.a / $scope.b;
        }
        else if ($scope.operator === 'squareroot(b)') {
            $scope.a = null;
            return Math.sqrt($scope.b).toFixed(4);
        }
        else if ($scope.operator === 'a^b') {
            return Math.pow($scope.a, $scope.b);
        }
        else if ($scope.operator === '(a^2 + b^2)') {
            if ($scope.a == null || $scope.b == null) {
                return "need two numbers";
            } else {
                return ($scope.a * $scope.a) + ($scope.b * $scope.b);
            }
        }
    }
});
