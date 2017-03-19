angular.module('myApp').controller('stopwatchController', function ($scope, stopWatchService) {

    $scope.stopwatch = stopWatchService.getInstance();

});