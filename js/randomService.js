angular.module('myApp').service('randomService', function () {
    this.random12 = (min, max) => {
        if (min >= max) {
            return "please enter a valid range"
        } else if (isNaN(min) == true || isNaN(max) == true) {
            return "please enter numbers";
        } else {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    };
});
