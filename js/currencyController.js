angular.module('myApp').controller('currencyController', function ($scope, mainService) {

    $scope.getExchangeRates = mainService.getExchangeRates().then(result => {
        console.log(result);
        $scope.data = result;
        $scope.arrayOfCurrencies = mainService.arrayOfCurrencies;
        $scope.dollarConverted = ($scope.dollar * $scope.data.rate);
        if($scope.dollar == '') {
            $scope.myValue = false;
        }else{
            $scope.myValue = true;
        }

        // $scope.convertCurrency = () => {
        //     $scope.dollarConverted =  $scope.data * $scope.dollar;
        var bouncespeed = 450;

        // SELECT ALL A'S EXCEPT... RESET BG-POSITION TO AVOID INITIAL POSITION BUG AND CALL BOUNCER
        $('.bubble').each(
            function () {
                $(this).css({backgroundPosition: '5px 5px'});
                bounce(this);
            }
        );


        function bounce(currentA) {
            newx = Math.floor(10 * Math.random());
            newy = Math.floor(3 * Math.random());
            newspeed = bouncespeed + Math.floor(10 * Math.random());
            $(currentA).animate({backgroundPosition: newx + 'px ' + newy + 'px'}, newspeed, 'linear', function () {
                bounce(currentA);
            });
        }


    });
    $scope.countries = mainService.countryData;

});
