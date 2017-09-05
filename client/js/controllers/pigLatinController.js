angular.module('myApp').controller('pigLatinController', function ($scope, pigService) {

    $scope.showText = false;
    $scope.showBox = false;
    $scope.convertFirstName = () => {
        $scope.cFirstName = pigService.convertName($scope.name);
        $scope.showText = true;
    }

    $scope.convertLastName = () => {
        $scope.cLastName = pigService.convertName($scope.lastName);
    }
    $scope.getRate = () => {
        pigService.getPorkRate().then(result => {
            $scope.data = result.data.data;
            $scope.showBox = true;
        })
    }
});
