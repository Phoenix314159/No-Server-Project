angular.module('myApp').controller('pigLatinController', function ($scope, pigService) {

    $scope.showText = false;

    $scope.convertFirstName = () => {
        $scope.cFirstName = pigService.convertName($scope.name);
        $scope.showText = true;
    }

    $scope.convertLastName = () => {
        $scope.cLastName = pigService.convertName($scope.lastName);
    }
});
