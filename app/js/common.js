// visible news
$('.all-news').on('click', function (e) {
    e.preventDefault();
    $('.news-box__item:hidden').slice(0, 12).css('display', 'flex');

    var onBlock = $('.news-box__item:hidden').length;
    if(onBlock <= 0) {
        $('.all-news').hide();
    }
});
// visible news

// btn top
$("body").on("click", ".click-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});


// fixed sidebar
$(function () {
    var topPos = $('.sidebar').offset().top;
    $(window).scroll(function () {
        var top = $(document).scrollTop(),
            pip = $('footer, .article-analog').offset().top,
            height = $('.sidebar').outerHeight();
        if (top > topPos && top < pip - height) {
            $('.sidebar').addClass('fixed').removeAttr("style");
        } else if (top > pip - height) {
            $('.sidebar').removeClass('fixed').css({'position': 'absolute', 'bottom': '0'});
        } else {
            $('.sidebar').removeClass('fixed');
        }
    });
});


// lazy load
$(document).ready(function () {
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
});
// lazy load

// validation


