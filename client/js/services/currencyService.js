angular.module('myApp').service('currencyService', function ($http) {
    this.countryData = () => {
        return $http({
            method: 'GET',
            url: '/api/countries'
        })
    }

    this.exchangeRates = () => {
        return $http({
            method: 'GET',
            url: '/api/currency'
        })
    };

});
