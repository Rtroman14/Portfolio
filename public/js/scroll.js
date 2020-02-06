if (document.location.href == "http://localhost:3000/about") {
    $("nav").addClass("nav--active");
}

// add class "nav--active" if at top of home page
if (document.location.href == "http://localhost:3000/") {
    $(window).on("scroll", () => {
        if ($(window).scrollTop()) {
            $("nav").addClass("nav--active");
        } else {
            $("nav").removeClass("nav--active");
        }
    });
}
