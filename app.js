angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/about.html'
            })
            .state('currencyConverter', {
                url: '/currencyconverter',
                templateUrl: './views/currencyconverter.html',
                controller: 'currencyController'
            })
            .state('calculator', {
                url: '/calculator',
                templateUrl: './views/calculator.html',
                controller: 'calculatorController'
            })
            .state('stopwatch', {
                url: '/stopwatch',
                templateUrl: './views/stopwatch.html',
                controller: 'stopwatchController'
            })

            .state('randomNumberGenerator', {
                url: '/randomnumbergenerator',
                templateUrl: './views/randomnumbergenerator.html',
                controller: 'randomController'
            })
            .state('pigLatin', {
                url: '/piglatin',
                templateUrl: './views/pigLatin.html',
                controller: 'pigLatinController'
            });

        $urlRouterProvider
            .otherwise('/')
    });