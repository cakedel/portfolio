$(function () {
    $('.mainSlider').slick({
        arrows: false,
        autoplay: true,
        centerMode: true,
        centerPadding: '700px',
    })
    $('.slideArrows i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev');
    })
    $('.slideArrows i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext');
    })
    $('.video').YTPlayer({
        videoURL: 'https://youtu.be/_kfMKSHdC_E',
        containment: '.mainVideo',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
    });
    $('.tabMenu li').on('click', function (event) {
        event.preventDefault();
        $('.tabMenu li').removeClass('on')
        $(this).addClass('on');
        var idx = $(this).index();
        $('.tabContent li').removeClass('on');
        $('.tabContent li').eq(idx).addClass('on');
    })
    $('.mainSlider').on('afterChange', function(){
        $('.menuP').addClass('on');
        $('.menuP').siblings().removeClass('on')
    })

})