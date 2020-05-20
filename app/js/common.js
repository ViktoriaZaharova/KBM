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


$('.fancybox').fancybox();


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

$('.btn-burger').click(function () {
   $('.mobile-menu').slideDown();
});

$('.btn-close').click(function () {
    $('.mobile-menu').slideUp();
});

// select
$(".select")
    .selectmenu()
    .selectmenu("menuWidget")
    .addClass("overflow");

$('.ui-selectmenu-button').click(function () {
   $(this).addClass('click');
});

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
    min: 0,
    max: 15,
    value: 9

});
$(".slider-range-2").slider({
    range: "min",
    min: 0,
    max: 10,
    value: 10
});

// активная ссылка меню
$('header .menu li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
        $(this).addClass('active');
    }
});
// end


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



// validate

var form = $(".form");
var newSurname = form.find("[name='oldSurname']"), newSeries = form.find("[name='seriesNumOld']"),
    oldSurname = form.find("[name='oldSurname2']"), oldSeries = form.find("[name='seriesNumOld2']");
var validator;

jQuery.validator.setDefaults({
    rules: {
        name: {required: true, minlength: 3, cyryllic: true, noSpace: true},
        surname: {required: true, minlength: 2, cyryllic: true, noSpace: true},
        phone: {required: true},
        select: {required: true},
        email: {required: true, email: true},
        fullname: {required: true, minlength: 5, fullNameCyryllic: true},
        date: {required: true},
        check: {required: true},
        seriesNum: {required: true, minlength: 9, series: true},
        seriesNumOld: {required: false, minlength: 9, series: true},
        oldSurname: {
            required: false, minlength: 1, cyryllic: true,
            noSpace: true
        },
        middlename: {cyryllic: true, noSpace: true}
    },
    messages: {
        check: "\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",
        name: "",
        surname: "",
        phone: "",
        email: ""
    },
    errorPlacement: function (error, element) {
    },
    submitHandler: function () {
        if (newSeries.val()) oldSeries.val(newSeries.val());
        if (newSurname.val()) oldSurname.val(newSurname.val());
        var fd = new FormData($("form")[0]);
        fd.append("cr", 2);
        $.ajax({
            type: "POST", url: "/", data: fd, processData: false, contentType: false,
            dataType: "html"
        }).done(function (data) {
            if (data && data === "ok") window.location.href = "/pay/" + link
        })
    }
});

function checkBoxValidate() {
    var checkbox = $('.form-group-check input[type="checkbox"]:checked').length;
    if (checkbox) $(this).parents('.form-group-check').toggleClass('click').find(".mask-driver").removeAttr("disabled"); else $(".mask-driver").attr("disabled", "disabled")
}

checkBoxValidate();
$('.form-group-check input[type="checkbox"]').change(checkBoxValidate);



function inputMask() {
    $('input[name="phone"]').inputmask("+7 (999) 999-99-99");
    $('input[name="date"]').inputmask("99.99.9999");
    $('input[name="seriesNum"]').inputmask("99 ** 999999");
    $('input[name="email"]').inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
        },
        definitions: {
            '*': {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                casing: "lower"
            }
        }
    });
}

inputMask();



// var checkboxes = $('.services input[type="checkbox"]');

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

$('.checkbox-changes').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('checkbox-check')
   $('.form-block__hidden').fadeToggle();
});

$('.btn-clear').click(function(e){
    e.preventDefault();
    $('.form-verify__page input[type=text]').each(function(){
        $(this).val('');
    });
    $('.form-verify__page').trigger('reset');
});

$('.btn-search__verify').click(function (e) {
    e.preventDefault();
   $('.result-verify').fadeIn();
    var id = $(this).attr('href'),

        top = $(id).offset().top;

    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({scrollTop: top - 240}, 500);
});