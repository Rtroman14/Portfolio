let nav__nav = document.querySelector(".nav__nav");
let checkbox = document.querySelector(".nav__toggle");
let popup = document.querySelector(".popup");
let popupContent = document.querySelector(".popup__content");

// // close collapsible nav when click outside of nav
window.onclick = function(event) {
    if (event.target == nav__nav) {
        checkbox.checked = !checkbox.checked;
    }
};

// // close popup
// window.onclick = function(event) {
//     if (event.target == popup) {
//         popup.style.opacity = "0";
//         popupContent.style.opacity = "0";
//         popup.style.visibility = "hidden";
//     }
// };

// ABOUT ME PAGE LINKS
// ===========================
