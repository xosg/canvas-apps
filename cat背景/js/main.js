
var data = init();

function init() {
    var $eyes = $('.eye');
    var $pupils = $('.pupil');
    var $lights = $('.light');
    var data = {};
    data.leftEye = {
        left: $eyes.eq(0).offset().left,
        top: $eyes.eq(0).offset().top,
        width: $eyes.eq(0).width() - 20,
        height: $eyes.eq(0).height() - 30
    }
    data.rightEye = {
        left: $eyes.eq(1).offset().left,
        top: $eyes.eq(1).offset().top,
        width: $eyes.eq(1).width() - 20,
        height: $eyes.eq(1).height() - 30
    }
    data.leftPupil = {
        left: $pupils.eq(0).offset().left,
        top: $pupils.eq(0).offset().top,
        width: $pupils.eq(0).width(),
        height: $pupils.eq(0).height()
    }
    data.rightPupil = {
        left: $pupils.eq(1).offset().left,
        top: $pupils.eq(1).offset().top,
        width: $pupils.eq(1).width(),
        height: $pupils.eq(1).height()
    }
    data.leftLight = {
        left: $lights.eq(0).offset().left,
        top: $lights.eq(0).offset().top,
        width: $lights.eq(0).width(),
        height: $lights.eq(0).height()
    }
    data.rightLight = {
        left: $lights.eq(1).offset().left,
        top: $lights.eq(1).offset().top,
        width: $lights.eq(1).width(),
        height: $lights.eq(1).height()
    }
    return data;
}

function follow(x, y) {
	/*
	 * 得到瞳孔$elem
	 */
    var $pupils = $('.pupil');
    var $leftPupil = $pupils.eq(0);
    var $rightPupil = $pupils.eq(1);
	/*
	 * 得到眼睛$elem
	 */
    var $eyes = $('.eye');
    var $leftEye = $eyes.eq(0);
    var $rightEye = $eyes.eq(1);
	/*
	 * 得到高光$elem
	 */
    var $lights = $('.light');
    var $leftLight = $lights.eq(0);
    var $rightLight = $lights.eq(1);

    var WINDOW_WIDTH = $(document).width();
    var WINDOW_HEIGHT = $(document).height();

    $leftPupil.css({
        "left": (data.leftEye.width / 2) + ((x - data.leftEye.left - (data.leftEye.width / 2)) / (WINDOW_WIDTH - data.leftEye.left - (data.leftEye.width / 2))) * (data.leftEye.width / 2) + 'px'
    });
    $rightPupil.css({
        "left": (data.rightEye.width / 2) + ((x - data.rightEye.left - (data.rightEye.width / 2)) / (WINDOW_WIDTH - data.rightEye.left - (data.rightEye.width / 2))) * (data.rightEye.width / 2) + 'px'
    });
    $leftLight.css({
        "left": (x / (WINDOW_WIDTH / ((data.leftPupil.width / 2)))) + 'px',
        "top": (data.leftEye.height / 2) + ((y - data.leftEye.top - (data.leftEye.height / 2)) / (WINDOW_HEIGHT - data.leftEye.top - (data.leftEye.height / 2))) * (data.leftEye.height / 2) + 'px'
    });
    $rightLight.css({
        "left": (x / (WINDOW_WIDTH / ((data.leftPupil.width / 2)))) + 'px',
        "top": (data.rightEye.height / 2) + ((y - data.rightEye.top - (data.rightEye.height / 2)) / (WINDOW_HEIGHT - data.rightEye.top - (data.rightEye.height / 2))) * (data.rightEye.height / 2) + 'px'
    });
}

$(document).mousemove(function (e) {
    follow(e.pageX, e.pageY);
});

var Timer = null;
$('.hand-react').on('mousedown', function () {
    Timer = setTimeout(function () {
        $('.right-hand').addClass('action');
    }, 2000);
})
$('.hand-react').on('mouseenter', function () {
    $('.hand-react').removeClass('cursor-none');
})
$('.hand-react').on('mouseleave', function () {
    clearTimeout(Timer);
    $('.hand-react').removeClass('cursor-none');
})
$('.hand-react').on('mouseup', function () {
    clearTimeout(Timer);
})

$('.right-hand').on("animationend", function () {
    $('.right-hand').removeClass('action');
    $('.hand-react').addClass('cursor-none')
});
$('.right-hand').on("webkitAnimationEnd", function () {
    $('.right-hand').removeClass('action');
    $('.hand-react').addClass('cursor-none')
});