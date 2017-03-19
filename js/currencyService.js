angular.module('myApp').service('currencyService', function ($http) {
    this.countryData = ['Australian Dollar', 'Bulgarian Lev', 'Brazilian Real', 'Canadian Dollar', 'Swiss Franc', 'Chinese Yuan',
        'Czech Republic Koruna', 'Danish Krone', 'British Pound', 'Hong Kong Dollar', 'Croatian Kuna', 'Hungarian Forint', 'Indonesian Rupiah',
        'Israeli New Shekel', 'Indian Rupee', 'Japanese Yen', 'South Korean Won', 'Mexican Peso', 'Malaysian Ringgit', 'Norwegian Krone',
        'New Zealand Dollar', 'Philippine Peso', 'Polish Zloty', 'Romanian Leu', 'Russian Ruble', 'Swedish Krona', 'Singapore Dollar',
        'Thai Baht', 'Turkish Lira', 'South African Rand', 'Euro'];

    let arr = [];

    this.exchangeRates = () => {
        return $http({
            method: 'GET',
            url: 'http://api.fixer.io/latest?base=USD'
        }).then(result => {
            let data = result.data.rates;
            for (var a in data) {
                arr.push({currency: a, rate: data[a]});
            }
            return arr;
        });

    };

});
