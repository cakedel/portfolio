$(function () {
    $(window).scroll(function (e) {

        var sct = $(document).scrollTop()

        if (sct > $('.brandStory').offset().top) {
            $('header').addClass('on').animate({ 'margin-top': '0' }, 1500, null, e)
        }
        else {
            $('header').removeClass('on')
        }
    })
    $('.gnb .left').hover(function (e) {
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
