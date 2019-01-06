// hide text
strong = document.querySelector('strong');

strong.addEventListener("click", () => {
    strong.style.display = 'none';
})

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