$(function () {
    // init cover
    (function () {
        var $headerSlide = $('.header__slide');
        var $headerGuide = $('.header__guide');

        var $slidePosts = $('.post--photo.tag--cover');
        $slidePosts.each(function () {
            var $slidePost = $(this);
            $slidePost.remove();

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

    // sort
    (function () {
        var $root = $('.posts');
        var $posts = $([
            '.post--text',
            '.post--photo',
            '.post--video',
            '.post--link'
        ].join(','));

        $posts.each(function (index, post) {
            var matchData = post.className.match(/tag--sort-([0-9]+)/);
            if (!matchData) {
                $root.append(post);
                return;
            }
            var sortNum = Number(matchData[1]);

            var $prev;
            for (var i = 0; i < sortNum; i++) {
                if ($('.tag--sort-' + i).length) {
                    $prev = $('.tag--sort-' + i);
                }
            }
            if ($prev) {
                $prev.after(post);
            } else {
                $root.prepend(post);
            }
        });
    })();
});
