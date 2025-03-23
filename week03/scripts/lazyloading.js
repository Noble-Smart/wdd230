document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.getAttribute("data-src"); // Load the actual image
                img.removeAttribute("data-src"); // Remove data-src after loading
                img.classList.add("loaded"); // Apply fade-in effect
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Update Year
document.getElementById("year").textContent = new Date().getFullYear();

// Update Last Modified Date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
