angular.module('myApp').controller('currencyController', function ($scope, currencyService) {

    $scope.countries = currencyService.countryData;
    // $scope.currencyFilter = currencyFilter;
    $scope.getExchangeRates = currencyService.exchangeRates().then(result => {
        $scope.data = result;
    });

});
