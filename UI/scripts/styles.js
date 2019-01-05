console.log('hello')

// Navigation bar style
var menu = document.querySelector(".bars");
var accord = document.querySelector(".accordion")

var NavList = document.querySelectorAll(".nav_links");

if (window.location.pathname == "/UI/Templates/profile.html") {
    document.querySelectorAll('.b-left')[0].className += "border";
} else if (window.location.pathname == "/UI/Templates/admin.html") {
    document.querySelectorAll('.b-left')[2].className += "border";
} else if (window.location.pathname == "/UI/Templates/dashboard.html") {
    document.querySelectorAll('.b-left')[1].className += "border";
}

// Accordion for smaller screens
var menu = document.querySelector(".bars");
var accord = document.querySelector(".accordion")

menu.addEventListener("click", () => {
    if (accord.style.display === "flex") {
        accord.style.display = "none";
        console.log('block')
    } else {
        accord.style.display = "flex"
        console.log('none')
    }
});