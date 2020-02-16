if (document.location.href == "http://localhost:3000/about") {
    $("nav").addClass("nav--active");
    $("a[href='#home']").attr("href", "http://localhost:3000/");
    $("a[href='#about']").attr("href", "http://localhost:3000/#about");
    $("a[href='#portfolio']").attr("href", "http://localhost:3000/#portfolio");
    $("a[href='#contact']").attr("href", "http://localhost:3000/#contact");
}

$(document).scroll(() => {
    if (
        $(window).scrollTop() == 0 &&
        (document.location.href == "http://localhost:3000/" ||
            document.location.href == "http://localhost:3000/#home")
    ) {
        $("nav").removeClass("nav--active");
    } else {
        $("nav").addClass("nav--active");
    }
});
