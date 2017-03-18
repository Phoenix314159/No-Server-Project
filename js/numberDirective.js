angular.module('myApp').directive('numberDirective',function ($timeout) {
    return {
        restrict: "E",
        template: '<div>{{number}}</div>',
        link:  (scope,element,attrs) => {
              scope.number = 10;
              // console.log(number);
            $timeout(() => {
                scope.number = 9;
                $timeout(() => {
                    scope.number = 8;
                    $timeout(() => {
                        scope.number = 7;
                        $timeout(() => {
                            scope.number = 6;
                            $timeout(() => {
                                scope.number = 5;
                                $timeout(() => {
                                    scope.number = 4;
                                    $timeout(() => {
                                        scope.number = 3;
                                        $timeout(() => {
                                            scope.number = 2;
                                            $timeout(() => {
                                                scope.number = 1;
                                                $timeout(() => {
                                                    $timeout(() => {
                                                        scope.number = 'I\'M RICH!!!';
                                                    },3000)
                                                    scope.number = '$10,000!!!';
                                                },3000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
    }
}});
