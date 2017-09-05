angular.module('myApp').directive('yellowDirective', function () {
    return {
        restrict: 'EA',

        link: ($scope, element, attrs) => {
            element.bind('mouseenter', () => {
                element.css('background-color', '#F2ABBF');
            });
            element.bind('mouseleave', () => {
                element.css('background-color', '#29BFC6');
            });
        }
    };
});