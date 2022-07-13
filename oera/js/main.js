$(function () {
    $(window).scroll(function () {

        var sct = $(document).scrollTop()

        if (sct > $('.brandTitle').offset().top) {
            $('header').addClass('on').animate({ 'margin-top': '0' }, 1000)
        }
        else {
            $('header').removeClass('on')
        }

    })
    $('.pSlider').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
    })
})


