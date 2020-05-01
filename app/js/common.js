// visible news
$('.all-news').on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        content = $('.news-content').find('.news-box');


    if (!$this.hasClass('trigger')) {
        $this.addClass('trigger');
        $this.html('Скрыть статьи <span class="icon fas fa-chevron-up"></span>');

        content.css('display', 'flex');
    } else {
        $this.removeClass('trigger');
        $this.html('Показать ещё статьи <span class="icon fas fa-chevron-down"></span>');

        content.slice(12).css('display', 'none');
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
            pip = $('footer').offset().top,
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


