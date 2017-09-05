angular.module('myApp').service('stopWatchService', function ($filter, $timeout) {

    let stopwatch = function () {
        this.startTime = null;
        this.endTime = null;
        this.delay = 1000;
        this.elapsedTime = function () {
            if (timer)
                return new Date() - this.startTime;
            return this.endTime - this.startTime;
        };
        this.elapsedStr = function (format) {
            ;
            return $filter('date')(this.elapsedTime(), format);
        };

        let timer = null;
        let tick = (function () {
            this.endTime = new Date();
            timer = $timeout(tick, this.delay);
        }).bind(this);
        this.start = function () {
            if (timer)
                return;
            if (this.startTime == null)
                this.startTime = new Date();
            else
                this.startTime = new Date() - this.elapsedTime();
            tick();
        };

        this.stop = function () {
            if (!timer)
                return;
            this.endTime = new Date();
            $timeout.cancel(timer);
            timer = null;
        };
        this.reset = function () {
            this.stop();
            this.startTime = null;
            this.endTime = null
        };
    };
    return {
        getInstance: function () {
            return new stopwatch();
        }
    };

});
