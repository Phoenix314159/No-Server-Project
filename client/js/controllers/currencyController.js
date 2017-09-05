angular.module('myApp').controller('currencyController', function ($scope, currencyService) {

    currencyService.exchangeRates().then(result => {
        $scope.data = result.data;
        currencyService.countryData().then(res => {
            $scope.countries = res.data;
        })
    });
});
