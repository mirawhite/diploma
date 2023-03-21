$(function () {

    $('.students__slider').slick({
        arrows: false,
        slidesToShow: 2,
        infinite: false,
        draggable: true,
        waitForAnimate: false,
        responsive:
            [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1.5,
                    },
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]
    })

    $('.questions__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('questions__acc-link--active')) {
            $(this).removeClass('questions__acc-link--active')
            $(this).children('.questions__acc-text').slideUp()
        } else {
            $('.questions__acc-link').removeClass('questions__acc-link--active')
            $('.questions__acc-text').slideUp()
            $(this).addClass('questions__acc-link--active')
            $(this).children('.questions__acc-text').slideDown()
        }
    })

    $('.header__topic, footer__logo-link').on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 800)
    })

    $(window).on('scroll', function () { 
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    })

$('.burger, .overlay, .header__topic').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
})

// $('.footer__top-title--slide').on('click', function () {
//     $(this).next().slideToggle()
// })

})