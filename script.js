$(document).ready(function() {
    $("img").click(function() {
        $(this).next().children("p").slideToggle();
    });
});
