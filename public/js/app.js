$(document).ready(function () {
    $('ul.nav.navbar-nav > li').click(function (e) {
        e.preventDefault();
        $('ul.nav.navbar-nav > li').removeClass('active');
        $(this).addClass('active');
    })
})