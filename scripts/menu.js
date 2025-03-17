document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if dark mode is saved in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️"; // Set to sun emoji when dark mode is active
    }

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️"; // Change to sun emoji
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙"; // Change to moon emoji
        }
    });

    // Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navMenu = document.getElementById("navMenu");

    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("menu-open");
    });

    // Track Number of Visits
    let visits = localStorage.getItem("visits") || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem("visits", visits);
    document.getElementById("visits").textContent = visits;

    // Placeholder for Weather (Update dynamically later)
    document.getElementById("weather").textContent = "Sunny, 28°C";
});
