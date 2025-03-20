document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded"); // Debugging

    const menuButton = document.querySelector("#hamburgerBtn");
    const navMenu = document.querySelector("#navMenu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function () {
            console.log("Hamburger clicked!"); // Debugging
            navMenu.classList.toggle("show");

            // Toggle icon between ☰ and ✖
            if (navMenu.classList.contains("show")) {
                menuButton.textContent = "✖";
            } else {
                menuButton.textContent = "☰";
            }
        });
    } else {
        console.error("Menu elements not found!");
    }
});
