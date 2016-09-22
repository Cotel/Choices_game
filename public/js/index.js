$(function() {
    $("#izq").click(function() {
        // $(".left-container").addClass("animated-left-container");
        $(".right-container").addClass("animated-right-container");
    });
    $("#der").click(function() {
        $(".left-container").addClass("animated-left-container");
        // $(".right-container").addClass("animated-right-container");
    });
});
