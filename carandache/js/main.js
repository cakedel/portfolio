$(function () {
    $('.mainVisual').YTPlayer({
        videoURL: 'https://youtu.be/SdAdcDa2xRA',
        containment: '.video', autoPlay: true, mute: true, startAt: 5, opacity: 1, showControls: false, playOnlyIfVisible: true,
    })
    $(window).scroll(function (e) {

        var sct = $(document).scrollTop()

        if (sct > $('.brandStory').offset().top) {
            $('header .gnb').addClass('on')
        }
        else {
            $('header .gnb').removeClass('on')
        }
        });

})