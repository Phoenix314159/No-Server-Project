angular.module('myApp').controller('calculatorController', function ($scope,mainService) {



        $scope.result = () => {
            // if($scope.a == null || $scope.b == null){
            //     return "";
            // }
             if(isNaN($scope.a) || isNaN($scope.b)){
                return 'please enter a number';
            }
//
//             $scope.slides = [
//             {image: 'https://img.tradeindia.com/fp/1/001/044/694.jpg', description: 'Image 00'},
//             {image: 'http://is5.mzstatic.com/image/thumb/Purple111/v4/b3/9f/8b/b39f8b1f-960c-20f1-a774-3f4f1332c5ed/source/175x175bb.jpg', description: 'Image 01'},
//             {image: 'http://compass1.org/wp-content/uploads/2015/06/Calculator_clipped_rev_1.png', description: 'Image 02'},
//             {image: 'http://stationeryinfo.com/uploads/images/company/549ab1804e7be2b908287388/pr/1419425084.jpg', description: 'Image 03'},
//             {image: 'https://lh3.googleusercontent.com/nmCqE1POzuA0fujjcKlzuIi-hVCa2PY_-V5L6HxY_Q4BCSGcd6Om-jGisWfcHEZAEcc=h900', description: 'Image 04'}];

            if ($scope.operator === 'CLEAR') {
                return $scope.a = $scope.b = null;
            }
            if ($scope.operator == '+') {
                $scope.x = Number($scope.a) + Number($scope.b);
                return $scope.x;
            }
            if ($scope.operator === '-') {
                return $scope.a - $scope.b;
            }
            if ($scope.operator === '*') {
                return $scope.a * $scope.b;
            }
            if ($scope.operator === '/') {
                return $scope.a / $scope.b;
            }
            if ($scope.operator === 'squareroot(b)') {
                $scope.a = null;
                return Math.sqrt($scope.b);
            }
            if ($scope.operator === 'exponent(a,b)') {
                return Math.pow($scope.a, $scope.b);
            }
            if ($scope.operator === '(a^2 + b^2)') {
                return ($scope.a * $scope.a) + ($scope.b * $scope.b);
            }
        }


    $scope.operators = mainService.operators;

});
