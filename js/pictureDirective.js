angular.module('myApp').directive('pictureDirective',function () {
    return{
        restrict: "E",
        template: '<img ng-src={{imageUrl}}>',
        link:  (scope,element,attrs) => {
            scope.imageUrl = 'http://www.nationalparkstraveler.com/sites/default/files/legacy_files/userhead/picture-56.jpg';
            // console.log(number);
            $timeout(() => {
                scope.imageUrl = 'http://vignette1.wikia.nocookie.net/blogclan-2/images/4/45/Random-turtle.gif/revision/latest?cb=20160706220110';
                $timeout(() => {
                    scope.imageUrl = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUtwztHOlEgZDf3tZw24ggBDBTr4uP-gHFyUD1-Fo4tTT4gKwGsw';
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
                                                    scope.number = 'BAM!';
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
    }
})
