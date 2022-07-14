$(function () {
    $(window).scroll(function () {

        var sct = $(document).scrollTop()
        if (sct < 1) {
            $('header').css("inset", "-100 auto auto 0")
        }

        if (sct > $('.brandStory').offset().top) {
            $('header').addClass('on')
        }
        else {
            $('header').removeClass('on')
        }
    })
    $('.gnb>ul').hover(function (e) {
        e.preventDefault()
        $('.bMenu').stop().slideUp()
        $('.bMenu').stop().slideToggle()
    })

    $('.pSlider').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
    })
})
