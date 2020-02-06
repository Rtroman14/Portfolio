let nav__nav = document.querySelector(".nav__nav");
let checkbox = document.querySelector(".nav__toggle");

// close collapsible nav when click outside of nav
window.onclick = function(event) {
    if (event.target == nav__nav) {
        checkbox.checked = !checkbox.checked;
    }
};
