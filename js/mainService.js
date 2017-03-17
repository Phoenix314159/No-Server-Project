angular.module('myApp').service('mainService', function ($http) {
   this.countryData = ['United Kindom', 'European Union', 'United States', 'Canada',
                       'Australia', 'Singapore', 'Egypt', 'Argentine', 'Barbados', 'Brazil','Chile',
     'China','Czech Republic', 'Denmark','East Caribbean', 'Estonia', 'Hong-Kong','Hungary', 'Iceland', 'India',
       'Indonesia', 'Israel','Jamaica','Japan', 'Latvia', 'Lebanon','Lithuania', 'Malaysia', 'Mexico', 'Namibia', 'Nepal',
      'New Zealand','Norway','Oman','Pakistan','Panama','Philippines','Poland','Qatar','Romania','Russia','Saudi Arabia',
       'South Africa','South Korea','Sri Lanka','Sweden','Switzerland','Thailand','Turkey','Venezuela'];
  let arr = [];

  this.getExchangeRates = () => {
      return $http({
          method: 'GET',
          url: 'http://api.fixer.io/latest?base=USD'
      }).then(result => {
          console.log(result);
          let data = result.data.rates;
          for (const a in data){
              arr.push({currency: a ,rate: data[a]});
          }
          return arr;
      })

  }
  this.arrayOfCurrencies = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    this.operators = ['CLEAR','+', '-', '*', '/', 'squareroot(b)', 'exponent(a,b)','(a^2 + b^2)'];

    this.random = (c,d) => {
        return Math.floor((Math.random() * d) + c);
    }















});
