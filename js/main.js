$(function () {

    $('.students__slider').slick({
        arrows: false,
        slidesToShow: 2,
        infinite: false,
        draggable: true,
        waitForAnimate: false,
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

})