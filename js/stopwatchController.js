angular.module('myApp').controller('stopwatchController', function ($scope, $timeout, stopWatchService) {

    $scope.stopwatch = stopWatchService.getInstance();
    $scope.showBox = true;
    $scope.showValue = true;
    let stopped;
    $scope.countdown = () => {

        $scope.showValue = true;
        stopped = $timeout(() => {
            $scope.showBox = false;
            if ($scope.counter > 0) {
                $scope.counter--;
                $scope.countdown();
                if ($scope.counter == 0) {
                    $timeout.cancel(stopped);
                }
            }

        }, 1000);

    };
    $scope.stop = () => {
        $timeout.cancel(stopped);
        $scope.showBox = true;

    }
    $scope.reset = () => {
        $scope.counter = 0;
        $scope.showValue = true;
    }


});