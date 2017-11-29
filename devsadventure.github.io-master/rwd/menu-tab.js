$(document).ready(function() {
    $('.menu-bar').click(function(e) {
        e.preventDefault();
        $(this).toggleClass("after");
    });
});