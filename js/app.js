angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/about.html'
            })
            .state('calculator', {
                url: '/calculator',
                templateUrl: './views/calculator.html',
                controller: 'calculatorController'
            })
            .state('stopwatch', {
                url: '/stopwatch',
                templateUrl: './views/stopwatch.html'
            })
            .state('unitConverter', {
                url: '/unitconverter',
                templateUrl: './views/unitconverter.html'
            })
            .state('currencyConverter', {
                url: '/currencyconverter',
                templateUrl: './views/currencyconverter.html',
                controller:'currencyController'
            })
            .state('randomNumberGenerator', {
                url: '/randomnumbergenerator',
                templateUrl: './views/randomnumbergenerator.html',
                controller: 'randomController'
            });
        $urlRouterProvider
            .otherwise('/');

    });