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

    return;

    var $main = $('.photo.main, .video.main');
    if ($main.length) {
        $main.remove();
        $('h1').before($main);
    }

    var $ios = $('.link.ios');
    if ($ios.length) {
        $ios.find('i').attr('class', 'fa fa-apple');
    }

    var $android = $('.link.android');
    if ($android.length) {
        $android.find('i').attr('class', 'fa fa-android');
    }

    var $github = $('.link.github');
    if ($github.length) {
        $github.find('i').attr('class', 'fa fa-github');
    }
});
