angular.module('myApp').service('calcService', function ($http) {
    let vm = this;
    vm.getOperators = () => {
        return $http({
            method: 'GET',
            url: '/api/operators'
        }).then(res => {
            vm.operators = res.data;

            vm.calculate = (firstNum, secondNum, operator) => {

                if (isNaN(firstNum) || isNaN(secondNum)) {
                    return 'please enter a number';
                }
                switch(operator) {
                    case 'CLEAR':
                        return firstNum = secondNum = null;
                    case '+':
                        return Number(firstNum) + Number(secondNum);
                    case '-':
                        return firstNum - secondNum;
                    case  '*':
                        return firstNum * secondNum;
                    case  '/':
                        return firstNum / secondNum;
                    case 'squareroot(b)':
                        return Math.sqrt(secondNum).toFixed(2);
                    case 'a^b':
                        return Math.pow(firstNum, secondNum);
                    case '(a^2 + b^2)':
                        if (firstNum == null || secondNum == null) {
                            return 'need two numbers';
                        } else {
                            return (firstNum * firstNum) + (secondNum * secondNum);
                        }
                }
            }
        })
    };
});


