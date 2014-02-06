$(function () {
    // intro
    (function () {
        var $introCover = $('.intro__cover');
        var $covers = $('.post--photo.cover');

        if (!$covers.length) {
            $('.intro').hide();
            return;
        }

        $covers.each(function () {
            var $post = $(this);
            var $li = $('<li />');

            var $img = $post.find('img');

            $li.addClass('cover');
            $li.css({
                backgroundImage: 'url(' + $img.attr('src') + ')'
            });
            $li.append('<span>' + $img.attr('alt') + '</span>');
            $introCover.append($li);
        });
    })();

    // movie
    (function () {
        var $movie = $('.movie');
        var video = $('.post--video.movie iframe').get(0);
        if (!video) {
            $movie.hide();
            return;
        }
        $movie.append(video);
    })();

    // how to use
    (function () {
        var $post = $('.post--photo.howtouse');
        if (!$post.length) {
            $('.howtouse').hide();
            return;
        }
        $('.howtouse__left').append($post.find('.post__caption'));;
        $('.howtouse__right').append($post.find('img'));;
    })();

    // download
    (function () {
        var $post = $('.post--photo.download');
        if (!$post.length) {
            $('.download').hide();
            return;
        }
        $('.download__left').append($post.find('img'));;

        var $ul = $('.download__right ul');
        $('.post--link.download').each(function () {
            var $postLink = $(this).find('a');
            $ul.append('<li><a class="download__link" href="' + $postLink.attr('href') + '">' + $postLink.text() + '</a></li>');
        });
    })();
});
