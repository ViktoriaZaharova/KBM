// visible news
$('.all-news').on('click', function (e) {
    e.preventDefault();
    $('.news-box__item:hidden').slice(0, 12).css('display', 'flex');

    var onBlock = $('.news-box__item:hidden').length;
    if (onBlock <= 0) {
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

$(function () {
    var topPos = $('.question-list').offset().top;
    $(window).scroll(function () {
        var top = $(document).scrollTop(),
            pip = $('footer').offset().top,
            height = $('.question-list').outerHeight();
        if (top > topPos && top < pip - height) {
            $('.question-list').addClass('fixed').removeAttr("style");
        } else if (top > pip - height) {
            $('.question-list').removeClass('fixed').css({'position': 'absolute', 'top': '0'});
        } else {
            $('.question-list').removeClass('fixed');
        }
    });
});


// lazy load
$(document).ready(function () {
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
});
// lazy load

// animate scroll block
$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});

// select
$(".select")
    .selectmenu()
    .selectmenu("menuWidget")
    .addClass("overflow");

// calendar
$(function () {
    //Сменим язык календаря на русский
    $.datepicker.setDefaults(
        {
            closeText: 'Закрыть',
            prevText: '',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
                'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        });
    //Добавим код календаря
    $(".datepicker").datepicker();
});





// slider range
$(".slider-range-1").slider({
    range: "min",

});
$(".slider-range-2").slider({
    range: "min",

});


// table hover
$(".kbm-table td").on("mouseenter mouseleave", function () {
        var td_index = $(this).index();
        $(this).parents("tr").toggleClass("lighting_tr");
        $(this).parents(".kbm-table").find("tr").each(function () {
            $("td:eq(" + td_index + ")", this).toggleClass("lighting_col");
        });
        $(this).toggleClass("lighting_cell");
});

$('.verify-variable').click(function () {
   $(this).toggleClass('active');
});


