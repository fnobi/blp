function Covers (opts) {
    this.$el = opts.$el;
    this.$prev = opts.$prev;
    this.$next = opts.$next;

    this.count = this.$el.children().length;
    
    this.updateCSS();
    this.initListeners();
}

Covers.prototype.updateCSS = function () {
    var $el = this.$el;
    var count = this.count;

    $el.css({
        width: (count * 100) + '%',
        marginLeft: (-(Math.ceil(count / 2) - 1) * 100) + '%'
    });
};

Covers.prototype.initListeners = function () {
    var self = this;
    var $prev = this.$prev;
    var $next = this.$next;

    $prev.on('click', function () {
        self.shiftRight();
    });

    $next.on('click', function () {
        self.shiftLeft();
    });
};

Covers.prototype.shiftLeft = function () {
    var $el = this.$el;
    var $children = $el.children();
    $el.append($children.get(0));
};

Covers.prototype.shiftRight = function () {
    var $el = this.$el;
    var $children = $el.children();
    var count = this.count;
    $el.prepend($children.get(count - 1));
};

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

        new Covers({
            $el: $introCover,
            $prev: $('.nav--prev'),
            $next: $('.nav--next')
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
