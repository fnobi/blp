$(function () {
    // init cover
    (function () {
        var $headerSlide = $('.header__slide');
        var $headerGuide = $('.header__guide');

        var $slidePosts = $('.post--photo.tag--cover');
        $slidePosts.each(function () {
            var $slidePost = $(this);
            $slidePost.hide();

            var $slide = $('<li />');
            $slide.addClass('slide');
            $slide.css({
                backgroundImage: 'url(' + $slidePost.find('img').attr('src') + ')'
            });
            $headerSlide.prepend($slide);

            var $guide = $('<li />');
            $guide.addClass('guide');
            $headerGuide.append($guide);
        });

        if ($slidePosts.length < 2) {
            return;
        }

        var waitTime = 2000;
        var fadeTime = 2000;
        var index = 0;

        $('.guide:first').addClass('active');
        (function paging () {
            setTimeout(function () {
                index = (index + 1) % $headerSlide.children().length;
                $('.guide.active').removeClass('active');
                $('.guide:nth-child(' + (index + 1) + ')').addClass('active');

                var $first = $($headerSlide.children(':last'));
                $first.fadeOut(fadeTime, function () {
                    $headerSlide.prepend($first);
                    $first.show();
                    paging();
                });
            }, waitTime);
        })();
    })();
});
