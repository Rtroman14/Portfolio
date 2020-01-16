$(window).on("scroll", () => {
    if ($(window).scrollTop()) {
        $("nav").addClass("nav--active");
    } else {
        $("nav").removeClass("nav--active");
    }
});
