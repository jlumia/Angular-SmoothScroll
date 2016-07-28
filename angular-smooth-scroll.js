app.service('smoothScroll', function ($window, $timeout) {
    var easeInOutCubic = function (t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    var position = function (start, end, elapsed, duration) {
        if (elapsed > duration) {
            return end;
        }
        return start + (end - start) * easeInOutCubic(elapsed / duration);
    };
    var smoothScroll = function (el, duration, callback) {
        duration = duration || 500;
        var start = $window.pageYOffset;
        var end = parseInt(el);
        var clock = Date.now();
        var requestAnimationFrame = $window.requestAnimationFrame ||
            $window.mozRequestAnimationFrame || $window.webkitRequestAnimationFrame ||
            function (fn) {
                $timeout(fn, 15);
            };
        var step = function () {
            var elapsed = Date.now() - clock;
            $window.scroll(0, position(start, end, elapsed, duration));
            if (duration > elapsed) {
                requestAnimationFrame(step);
            } else {
                if (typeof callback === 'function') {
                    callback(el);
                }
            }
        };
        step();
    };
    return smoothScroll;
});