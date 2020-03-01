// let domain = "https://ryanroman.herokuapp.com/";
// let domain = "http://localhost:3000/";
let domain = "http://www.hireryanroman.com/";

if (document.location.href == domain + "about") {
    $("nav").addClass("nav--active");
    $("a[href='#home']").attr("href", domain);
    $("a[href='#about']").attr("href", domain + "#about");
    $("a[href='#portfolio']").attr("href", domain + "#portfolio");
    $("a[href='#contact']").attr("href", domain + "#contact");
}

$(document).scroll(() => {
    if (
        $(window).scrollTop() == 0 &&
        (document.location.href == domain || document.location.href == domain + "#home")
    ) {
        $("nav").removeClass("nav--active");
    } else {
        $("nav").addClass("nav--active");
    }
});
