$(function () {
    $('.mainVisual').YTPlayer({
        videoURL: 'https://youtu.be/SdAdcDa2xRA',
        containment: '.video', autoPlay: true, mute: true, startAt: 5, opacity: 1, showControls: false, playOnlyIfVisible: true,
    })
    $(window).scroll(function (e) {

        var sct = $(document).scrollTop()

        if (sct > $('.mainSlider').offset().top) {
            $('header .gnb').addClass('on')
        }
        else {
            $('header .gnb').removeClass('on')
        }
    });
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        centerMode: true,
        centerPadding: '700px',
    });
})