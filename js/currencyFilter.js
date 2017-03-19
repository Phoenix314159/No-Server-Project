angular.module('myApp').filter('currencyFilter', function () {
    return (input, letter) => {
        input = input || [];
        let out = [];
        input.forEach(item => {

            if (item.charAt(0).toLowerCase() == letter) {
                out.push(item);
            }
        });
        return out;
    }
});