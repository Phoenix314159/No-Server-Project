// angular.module('myApp').directive('uCdirective',function () {
//     return {
//             restrict: 'E',
//             templateUrl: 'unitconverter.html',
//             scope: {
//                 lesson: '=',
//                 dayAlert: '&'
//             },
//            controller: function ($scope) {
//                $scope.options = [
//                    {name: "millimeters", value: "mm"},
//                    {name: "centimeters", value: "cm"},
//                    {name: "meters", value: "m"},
//                    {name: "kilometers", value: "km"},
//                    {name: "inches", value: "in"},
//                    {name: "feet", value: "ft"},
//                    {name: "yards", value: "yd"},
//                    {name: "miles", value: "mi"},
//
//                    {name: "milligrams", value: "mg"},
//                    {name: "grams", value: "g"},
//                    {name: "kilograms", value: "kg"},
//                    {name: "ounces", value: "oz"},
//                    {name: "pounds", value: "lb"}
//                ];
//         }
//     }
// })
angular.module('myApp').directive('myDomDirective', function () {
    return {

        link: function ($scope, element, attrs) {
            // element.bind('click', function () {
            //     element.html('You clicked me!');
            // });
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    };
});