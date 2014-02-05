$(function () {
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
